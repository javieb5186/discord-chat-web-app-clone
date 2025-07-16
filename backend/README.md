# Backend - DiscordChat

This is the backend service for **DiscordChat**, a real-time messaging single-page application (SPA) inspired by Discord. It is built using Node.js, Express, WebSockets, PostgreSQL (via Supabase), and supports Google OAuth2 authentication. The backend is containerized using Docker and deployed via Google Cloud Run.

## Tech Stack

- **Node.js** + **Express** – REST API and routing
- **WebSocket (ws)** – Real-time messaging
- **PostgreSQL** – Primary database (hosted on Supabase)
- **Google OAuth2** – Authentication
- **JWT** – Stateless user sessions
- **dotenv** – Environment variables
- **Docker** – Containerization

## Getting Started Locally

### 1. Prerequisites

- Node.js 18+
- Docker (optional, for containerized dev)
- A [Google Cloud](https://console.cloud.google.com/) account
- A [Supabase](https://supabase.com) project (or another PostgreSQL DB)

### 2. Required External Services

#### Google OAuth Setup (via GCP)

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and enable **OAuth consent screen**.
3. Go to **Credentials** > **Create credentials** > **OAuth 2.0 Client IDs**:
   - Application type: Web application
   - Add this redirect URI:  
     `http://localhost:8080/api/auth/google/callback`
4. Save your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

#### Supabase (PostgreSQL)

1. Create a project at [Supabase](https://supabase.com).
2. Under `Connect` → `Transaction Pooler`, copy the connection string.
3. You’ll use this string in your `.env` file under `DATABASE_URL`.

### 3. Environment Variables

Create a `.env` file at the root of the backend:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret
DATABASE_URL=your-postgresql-connection-string
```

### 4. Run Locally

Option 1: Node.js

```bash
npm install
npm run dev
```

Option 2: Docker

```bash
docker build --build-arg NODE_ENV=development -t discord-chat-backend .
docker run --env-file .env -p 8080:8080 discord-chat-backend
```

Make sure your `.env` file is present during development.  
Do not include it in production builds or commit it to version control.

## Authentication

- Google OAuth2 is used for login
- JWT is issued to the frontend after successful authentication
- Authenticated users are required for WebSocket and `/api/messages` routes

## API Routes

| Method | Endpoint                    | Description                    |
| ------ | --------------------------- | ------------------------------ |
| GET    | `/api/auth/google`          | Starts Google OAuth2 flow      |
| GET    | `/api/auth/google/callback` | Handles Google OAuth2 redirect |
| GET    | `/api/messages`             | Protected test route           |

### Events

- On connect: validates JWT
- On message: broadcasts to all connected clients

## Tests

Visit:

http://localhost:8080/api/auth/google

You will be redirected to authenticate via Google.

Use the returned token from login to test:

```bash
curl -H "Authorization: Bearer YOUR_JWT" http://localhost:8080/api/messages
```

Test WebSocket using wscat:

```bash
npx wscat -c ws://localhost:8080?token=<your_token>
```

## Status

- [x] PostgreSQL connected via Supabase
- [x] Google OAuth2 working
- [x] WebSocket messaging implemented
- [x] Dockerized backend
- [ ] Deployed on Render
