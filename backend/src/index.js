import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import passport from "./auth/passport.js";
import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/messages.js";
import dbTestRoutes from "./routes/dbTest.js";
import { setupWebSocket } from "./websocket/server.js";

dotenv.config();
console.log(process.env.JWT_SECRET);

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/db-test", dbTestRoutes);

setupWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
