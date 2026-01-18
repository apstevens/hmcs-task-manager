# HMCTS Developer Challenge

## Overview

This repository contains my solution to the HMCTS DTS Developer Challenge.
The exercise focuses on building a small, maintainable service with clear structure, tests, and sensible trade offs.

The goal is clarity over cleverness.
The solution prioritises readability, testability, and straightforward design.

## Problem Summary

The challenge requires building an application which exposes functionality defined in the brief.
The application accepts input, processes it according to the rules provided, and returns deterministic output.
Edge cases and invalid input receive explicit handling.

Full challenge details are available in the HMCTS GitHub repository.

## Solution Approach

I focused on a simple and explicit design across the API and UI. The backend exposes a small REST surface for tasks, and the frontend calls that API through a single typed client.

## Key Decisions
- Keep HTTP handlers thin and push data access into a service layer.
- Use Prisma as the only database access path.
- Keep the frontend API wrapper in one place (`src/services/api.ts`).
- Prefer predictable, plain JSON inputs and outputs.
- Keep wiring explicit (no hidden framework magic).

The solution avoids unnecessary abstractions. The code reads top to bottom without surprises.

## Technology
Backend:
- Language: Node.js (ES modules)
- Framework: Express
- Database: PostgreSQL via Prisma
- Tooling: npm, Prisma CLI

Frontend:
- Language: TypeScript
- Framework: React (Vite)
- Styling: Tailwind CSS
- Routing: React Router

The project builds and runs using standard tooling without custom scripts.

## Project Structure
Backend (`backend/api`):
- `src/server.js`: HTTP server bootstrap and CORS setup
- `src/app.js`: Express app and route wiring
- `src/routes`: REST endpoints for tasks
- `src/controllers`: Request handlers
- `src/services`: Prisma-backed task operations
- `prisma`: Schema and migrations

Frontend (`frontend/web/hmcts-app`):
- `src/main.tsx`: App bootstrap
- `src/App.tsx`: Routes and layout
- `src/pages`: UI screens
- `src/services/api.ts`: Task API client

Logic lives outside entry points. UI stays thin and delegates API work to the service module.

## Running the Application
Backend:
1. Set `DATABASE_URL` in `backend/api/.env`.
2. Install dependencies and run migrations.
3. Start the server.

Example:
```bash
cd backend/api
npm install
npx prisma migrate dev
npm run dev
```

Frontend:
1. Install dependencies.
2. Start Vite.

Example:
```bash
cd frontend/web/hmcts-app
npm install
npm run dev
```

Optional: set `VITE_API_URL` in `frontend/web/hmcts-app/.env` to override the API base URL (defaults to `http://localhost:3000/tasks`).

## Tests
Automated tests are not implemented yet. The next step would be unit tests for the service layer and API handlers, plus UI tests for core task flows.

Test execution (once added):
```bash
npm test
```

## Error Handling
API errors return JSON with a clear message and status code. The server fails fast on unexpected errors rather than silently continuing.

## Assumptions
- Input shape follows the UI and API contract.
- Output must remain deterministic.
- Performance requirements are modest.
- A local PostgreSQL instance is available.

## What I Would Improve With More Time
- Add unit tests for services/controllers and API integration tests.
- Add input validation with explicit error messaging.
- Add structured logging and request IDs.
- Add CI configuration and environment checks.

## Author
