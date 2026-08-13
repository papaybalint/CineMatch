# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## After restructuring (client / backend)

I moved the frontend files into the `client` folder and created an empty `backend` folder for server code. The project root now contains helper scripts to run the client/backend from the repository root.

How to run the frontend (recommended):

```bash
cd client
npm install
npm run dev
```

Or run from the project root using the included proxy scripts:

```bash
npm run client:install
npm run client:dev
```

Notes:
- `client/package.json` contains the frontend `scripts` (dev, build, preview). Run commands inside `client/` or use the root proxy scripts above.
- `backend/` is currently empty — when you add server code, put its own `package.json` in `backend/` and use `npm run backend:dev` from the root (or `cd backend` and run scripts there).

If you'd like, I can convert this repo into an npm workspace later so both `client` and `backend` are managed together.

