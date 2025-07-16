# DiscordChat Frontend

This is the frontend for **DiscordChat**, a lightweight Discord-style messaging app focused only on real-time messaging features. Built with React, TypeScript, Zustand, SCSS, and Cypress, it connects to a backend that handles authentication, WebSockets, and message persistence.


## Tech Stack

- **React** – UI library
- **TypeScript** – Static typing
- **Vite** – Fast dev server and bundler
- **Zustand** – State management
- **SCSS** – Styling
- **Cypress** – End-to-end testing
- **Vitest** – Unit testing
- **ARIA / a11y** – Accessibility compliance
- **Lighthouse** – Performance and accessibility auditing
- **Google OAuth** – Auth strategy (token received via URL)
- **WebSockets** – Real-time messaging via backend
- **Firebase Hosting** – Deployed frontend


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quickchat.git
cd quickchat/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)


## ✅ Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run test` – Run Vitest unit tests
- `npm run cypress` – Run Cypress tests


## 🔐 Auth Flow

- Google OAuth is triggered by the backend.
- After login, the backend redirects to `/` with a JWT token in the URL.
- The frontend captures and stores this token locally (e.g., in Zustand).
- Token is attached to requests and WebSocket connections.



## 🧪 Testing

- Unit tests are written using **Vitest**
- E2E tests use **Cypress**
- Accessibility tested using **Lighthouse** and manual ARIA role checks


## 🌐 Deployment

The frontend is deployed using **Firebase Hosting**. Run:

```bash
npm run build
firebase deploy
```
