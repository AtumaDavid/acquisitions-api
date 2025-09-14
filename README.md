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

### Future Plans

- In the future, Docker will be used to containerize and run the app for easier deployment and environment consistency. Documentation will be updated accordingly.

## Next Steps

- Configure ESLint and Prettier for the project.
- Add more documentation as new tools and configurations are introduced.

---

_This README will be updated as the project setup progresses._
