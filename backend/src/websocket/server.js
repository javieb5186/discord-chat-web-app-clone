import { WebSocketServer } from 'ws';
import jwt from 'jsonwebtoken';

export function setupWebSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws, req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const token = url.searchParams.get('token');

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      ws.user = user;
      console.log(`✅ WebSocket Authenticated: ${user.email}`);
    } catch {
      console.log('❌ WebSocket Auth Failed: Invalid token');
      ws.close();
      return;
    }

    ws.on('message', (message) => {
      // Broadcast to all
      wss.clients.forEach(client => {
        if (client.readyState === ws.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on('close', () => {
      console.log('❌ WebSocket Disconnected');
    });
  });

  console.log('📡 WebSocket server initialized');
}