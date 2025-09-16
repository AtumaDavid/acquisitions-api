# Docker Setup Guide for Acquisitions API

This guide explains how to run the Acquisitions API using Docker with direct Neon Cloud database connections for both development and production environments.

## 🏗️ Architecture Overview

### Development & Production

- **Neon Cloud Database**: The application connects directly to your Neon Cloud database for both development and production.
- **No Local Postgres or Neon Local**: No local database or proxy is required, avoiding port conflicts and simplifying setup.

## 📋 Prerequisites

1. **Docker & Docker Compose** installed on your system
2. **Neon Account** with a project created at [console.neon.tech](https://console.neon.tech)
3. **Neon API Key** (get from Neon Console → Account Settings → API Keys)

## 🔧 Initial Setup

### 1. Get Neon Credentials

From your [Neon Console](https://console.neon.tech):

- **NEON_API_KEY**: Go to Account Settings → API Keys
- **NEON_PROJECT_ID**: Found in Project Settings → General
- **DATABASE_URL**: Copy from your dashboard (for both development and production)

### 2. Configure Environment Files

Edit `.env.development` and `.env.production`:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_E5eHjTKhP7ry@ep-plain-sun-ad1cymjn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
PORT=3000
LOG_LEVEL=debug # or info for production
```

## 🚀 Docker Workflow

### Development

- Start with:

  ```bash
  docker compose -f docker-compose.dev.yml up --build
  ```

- The app will be available at: `http://localhost:3000`
- The database is Neon Cloud, as set in `.env.development`

### Production

- Start with:

  ```bash
  docker compose -f docker-compose.prod.yml up --build
  ```

- The app will be available at: `http://localhost:3000`
- The database is Neon Cloud, as set in `.env.production`

## 📋 Environment Variables

- Use your Neon Cloud connection string for `DATABASE_URL` in both `.env.development` and `.env.production`.

## 🐛 Troubleshooting

- If you see `address already in use` for port 5432, you can ignore it—your app does not use local Postgres or Neon Local.
- All database operations go directly to Neon Cloud.

## 📁 File Structure

```
acquisitions-api/
├── Dockerfile
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .dockerignore
├── .env.development
├── .env.production
└── logs/
```

## 🚀 Quick Start Checklist

- [ ] Install Docker and Docker Compose
- [ ] Create Neon account and get API credentials
- [ ] Update `.env.development` and `.env.production` with your Neon Cloud connection string
- [ ] Run `docker compose -f docker-compose.dev.yml up --build` to start development
- [ ] Visit http://localhost:3000 to verify the application
- [ ] For production, use `docker compose -f docker-compose.prod.yml up --build`

---

For additional help, check the [Neon documentation](https://neon.tech/docs) or create an issue in the project repository.
