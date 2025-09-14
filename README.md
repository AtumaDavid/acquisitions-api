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

## Commands Used

### Install ESLint and Prettier

```bash
npm i eslint @eslint/js prettier eslint-config-prettier eslint-plugin-prettier -D
```

- **Why:** Installs all necessary packages for linting and formatting JavaScript code, and for integrating Prettier with ESLint.

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

### Future Plans

- In the future, Docker will be used to containerize and run the app for easier deployment and environment consistency. Documentation will be updated accordingly.

## Next Steps

- Configure ESLint and Prettier for the project.
- Add more documentation as new tools and configurations are introduced.

---

_This README will be updated as the project setup progresses._
