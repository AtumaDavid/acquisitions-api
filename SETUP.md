# Project Setup Guide: Acquisitions API

This guide walks you through setting up the Acquisitions API project after cloning the repository.

## 1. Clone the Repository

```bash
git clone https://github.com/AtumaDavid/acquisitions-api.git
cd acquisitions-api
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

- Copy `.env.example` to `.env.development` and `.env.production`:
  ```bash
  cp .env.example .env.development
  cp .env.example .env.production
  ```
- Edit both files and set your Neon Cloud `DATABASE_URL`, API keys, and other secrets as needed.

## 4. Start Development Environment (Recommended)

- Use the provided npm script to build and start everything automatically:
  ```bash
  npm run dev:docker
  ```
- This will:
  - Build Docker containers if needed
  - Run database migrations
  - Start the app in development mode

## 5. Run Database Migrations (if needed)

- The `dev:docker` script already runs migrations automatically, so you usually do not need to run them manually.

## 6. Access the Application

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 7. Stopping the Environment

```bash
docker compose down
```

## 8. Troubleshooting

- If you encounter port conflicts, ensure no other services are running on the same ports.
- Check logs with:
  ```bash
  docker compose logs
  ```

## 9. Additional Commands

- Lint code:
  ```bash
  npm run lint
  ```
- Format code:
  ```bash
  npm run format
  ```
- Run tests (if available):
  ```bash
  npm test
  ```

---

For more details, see the main `README.md` and `DOCKER.md` files.
