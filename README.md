# Acquisitions API

This project is a Node.js API for managing acquisitions. Below is documentation for the development tools and commands used so far. This README will be updated as more tools and configurations are added.

## Development Tools Installed

### ESLint

- **Package:** `eslint`
- **Purpose:** Linting JavaScript code to enforce code quality and consistency.
- **Installed with:** `npm i eslint -D`

### ESLint JS Config

- **Package:** `@eslint/js`
- **Purpose:** Provides recommended ESLint configurations for JavaScript projects.
- **Installed with:** `npm i @eslint/js -D`

### Prettier

- **Package:** `prettier`
- **Purpose:** Code formatter to ensure consistent code style.
- **Installed with:** `npm i prettier -D`

### ESLint Prettier Integration

- **Packages:** `eslint-config-prettier`, `eslint-plugin-prettier`
- **Purpose:** Integrates Prettier with ESLint, disables conflicting rules, and enables formatting as lint errors.
- **Installed with:** `npm i eslint-config-prettier eslint-plugin-prettier -D`

## Database & ORM Tools Installed

### Neon Serverless

- **Package:** `@neondatabase/serverless`
- **Purpose:** Provides serverless connectivity to Neon Postgres databases, enabling scalable and efficient database access.
- **Installed with:** `npm install @neondatabase/serverless`

### Drizzle ORM

- **Package:** `drizzle-orm`
- **Purpose:** Modern TypeScript ORM for SQL databases, offering type-safe queries and migrations.
- **Installed with:** `npm install drizzle-orm`

### Drizzle Kit

- **Package:** `drizzle-kit`
- **Purpose:** CLI tool for managing Drizzle ORM migrations and schema generation.
- **Installed with:** `npm install -D drizzle-kit`

## Core Middleware & Logging Tools

### Helmet

- **Package:** `helmet`
- **Purpose:** Secures Express apps by setting various HTTP headers to protect against common vulnerabilities.
- **Installed with:** `npm install helmet`

### Morgan

- **Package:** `morgan`
- **Purpose:** HTTP request logger middleware for Node.js, useful for logging incoming requests and debugging.
- **Installed with:** `npm install morgan`

### CORS

- **Package:** `cors`
- **Purpose:** Enables Cross-Origin Resource Sharing, allowing your API to be accessed from different domains.
- **Installed with:** `npm install cors`

### Cookie-Parser

- **Package:** `cookie-parser`
- **Purpose:** Parses cookies attached to client requests, making them easily accessible in your Express app.
- **Installed with:** `npm install cookie-parser`

### Winston

- **Package:** `winston`
- **Purpose:** Versatile logging library for Node.js, used for logging errors, info, and other messages to files and the console.
- **Installed with:** `npm install winston`

## Additional Dependencies

### bcrypt

- **Package:** `bcrypt`
- **Purpose:** Library for hashing passwords securely before storing them in the database.
- **Installed with:** `npm install bcrypt`

### jsonwebtoken

- **Package:** `jsonwebtoken`
- **Purpose:** Used for creating and verifying JWT tokens for authentication and authorization.
- **Installed with:** `npm install jsonwebtoken`

### zod

- **Package:** `zod`
- **Purpose:** TypeScript-first schema validation library, used for validating request payloads and data structures.
- **Installed with:** `npm install zod`

## Commands Used

### Install ESLint and Prettier

```bash
npm i eslint @eslint/js prettier eslint-config-prettier eslint-plugin-prettier -D
```

- **Why:** Installs all necessary packages for linting and formatting JavaScript code, and for integrating Prettier with ESLint.

### Install Neon and Drizzle ORM

```bash
npm install @neondatabase/serverless drizzle-orm
```

- **Why:** Installs the Neon serverless driver and Drizzle ORM for database connectivity and ORM features.

### Install Drizzle Kit (Dev Dependency)

```bash
npm install -D drizzle-kit
```

- **Why:** Installs Drizzle Kit CLI for managing database migrations and schema as a development dependency.

### Install Core Middleware & Logging Tools

```bash
npm install helmet morgan cors cookie-parser winston
```

- **Why:** Installs essential middleware and logging tools for security, request logging, CORS support, cookie parsing, and logging in the application.

## Application Run Commands

### Development Mode

```bash
npm run dev
```

- **Why:** Runs the application in development mode using the script defined in `package.json`. This command executes:
  ```bash
  node --watch src/index.js
  ```
  The `--watch` flag automatically restarts the app when changes are detected in the source files, improving development speed and feedback.

### Start Script

```bash
npm start
```

- **Why:** Runs the application in production mode using the script defined in `package.json`:
  ```bash
  node src/index.js
  ```
- Use this command for production deployments (e.g., with Docker or cloud platforms).

### Linting Code

```bash
npm run lint
```

- **Why:** Runs ESLint on the project to check for code quality and style issues. Helps maintain consistent and error-free code.
- **Note:** The `lint` script should be defined in `package.json`. If not present, add:
  ```json
  "scripts": {
    "lint": "eslint ."
  }
  ```

### Additional Scripts

#### Fix Lint Errors

```bash
npm run lint:fix
```

- **Why:** Automatically fixes fixable ESLint errors in your codebase.

#### Format Code

```bash
npm run format
```

- **Why:** Uses Prettier to automatically format all files in the project for consistent code style.

#### Check Formatting

```bash
npm run format:check
```

- **Why:** Checks if files are formatted according to Prettier rules, without making changes. Useful for CI or pre-commit checks.

#### Drizzle Kit Scripts

##### Generate Drizzle Schema

```bash
npm run db:generate
```

- **Why:** Generates Drizzle ORM schema files based on your database structure. Use this after updating your models or database schema.

##### Run Database Migrations

```bash
npm run db:migrate
```

- **Why:** Applies pending migrations to your database using Drizzle Kit. Keeps your database schema in sync with your code.

##### Open Drizzle Studio

```bash
npm run db:studio
```

- **Why:** Launches Drizzle Studio, a web UI for managing and inspecting your database and migrations.

## API Routes

### Authentication Routes

- `POST /api/auth/sign-up` — Register a new user
- `POST /api/auth/sign-in` — Log in a user
- `POST /api/auth/sign-out` — Log out a user

### Database Test Route

- `GET /api/db-test` — Test database connectivity and query the users table

## Project Structure

```
acquisitions-api/
├── src/
│   ├── app.js                # Express app setup and middleware
│   ├── index.js              # Entry point for starting the server
│   ├── config/
│   │   ├── database.js       # Database connection setup
│   │   └── logger.js         # Winston logger configuration
│   ├── controllers/
│   │   └── auth.controller.js# Auth controller logic
│   ├── models/
│   │   └── user.model.js     # User table schema
│   ├── routes/
│   │   ├── auth.routes.js    # Auth endpoints
│   │   └── dbtest.routes.js  # Database test endpoint
│   ├── services/
│   │   └── auth.service.js   # Auth service logic
│   └── ...                   # Other folders (middleware, utils, validations, etc.)
├── .env                      # Environment variables
├── .env.example              # Example env file
├── package.json              # Project metadata and scripts
└── README.md                 # Project documentation
```

---

## Authentication Features

### User Signup

- Endpoint: `POST /api/auth/sign-up`
- Registers a new user, hashes the password, and returns a JWT token.

### User Sign-in

- Endpoint: `POST /api/auth/sign-in`
- Authenticates user credentials, validates password, and returns a JWT token if successful.
- Uses `authenticateUser` and `comparePassword` functions for secure login.

### User Sign-out

- Endpoint: `POST /api/auth/sign-out`
- Logs out the user by clearing the authentication token.

#### Implementation Notes

- Passwords are hashed using bcrypt before storage.
- JWT tokens are used for session management and authentication.
- All authentication actions are logged using Winston for traceability.
- Request validation is performed using Zod schemas.

## Data Flow Overview

Below is a high-level overview of the current data flow in the Acquisitions API. This section will be updated as the project evolves and new features are added.

1. **Client Request**
   - The client sends an HTTP request to the API (e.g., sign-up, login, CRUD operations).

2. **Request Validation**
   - Incoming request payloads are validated using Zod schemas to ensure data integrity and prevent invalid data from reaching the business logic.

3. **Controller Layer**
   - Controllers (e.g., `auth.controller.js`) handle the request, invoke validation, and call the appropriate service functions.

4. **Service Layer**
   - Service functions (e.g., `auth.service.js`) contain the business logic, interact with the database via Drizzle ORM, and handle tasks like password hashing (bcrypt) and token generation (jsonwebtoken).

5. **Database Layer**
   - Data is stored and retrieved from the PostgreSQL database using Drizzle ORM and Neon serverless driver.

6. **Response**
   - The controller sends a response back to the client, including status codes, messages, and any relevant data or errors.

7. **Logging & Middleware**
   - All requests and errors are logged using Winston and Morgan. Middleware like Helmet, CORS, and Cookie-Parser handle security, cross-origin requests, and cookie management.

---

## Docker & Environment Setup

### Development & Production

- **Neon Cloud Database**: The application connects directly to your Neon Cloud database for both development and production.
- **No Local Postgres or Neon Local**: No local database or proxy is required, avoiding port conflicts and simplifying setup.

### 🚀 Docker Workflow

#### Development

- Start with:

  ```bash
  docker compose -f docker-compose.dev.yml up --build
  ```

- The app will be available at: `http://localhost:3000`
- The database is Neon Cloud, as set in `.env.development`

#### Production

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

---

## Recent Updates

- Docker Compose files for both development and production have been updated:
  - **Development:** Now uses Neon Cloud directly, simplifying the setup.
  - **Production:** Connects to Neon Cloud with robust configuration.
- See `docker-compose.dev.yml` and `docker-compose.prod.yml` for the latest configuration details.
- Make sure your `.env.development` and `.env.production` files match the expected environment variables for each setup.

---

---

## 🧪 Testing Setup

This project uses **Jest** and **Supertest** for API and unit testing.

### Install Testing Dependencies

```bash
npm install --save-dev jest supertest
npm init jest@latest
```

- `jest` is the test runner and assertion library.
- `supertest` is used for HTTP assertions on Express endpoints.
- `npm init jest@latest` will help you scaffold a Jest config file (`jest.config.mjs`).

### Run Tests

```bash
npm test
```

This will run all tests in files matching `.test.js` or `.spec.js` using the configuration in `jest.config.mjs`.

### Example Test Script

See `test/app.test.js` for sample API endpoint tests.

### Coverage

Test coverage reports are generated in the `coverage/` directory after running tests.

---

_This README will be updated as the project progresses_
