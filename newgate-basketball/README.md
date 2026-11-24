# Newgate Basketball Arena

## Development with Gitpod

This repository is configured to run automatically in a **Gitpod** workspace.

### 1️⃣ Open the project in Gitpod
1. Push this folder to a GitHub (or GitLab/Bitbucket) repository.
2. Open the repo URL with the `gitpod.io/#` prefix, e.g.:
   ```
   https://gitpod.io/#https://github.com/<your‑user>/<repo-name>
   ```
   Gitpod will provision a Ubuntu container, install Node, run `npm install` and start the Vite dev server.

### 2️⃣ Preview the app
- After the workspace finishes launching, Gitpod will open a preview tab for **port 5173** (the Vite dev server). The preview URL looks like:
  ```
  https://5173-<workspace‑id>.gitpod.io/
  ```
- You should see the Main Menu and, after clicking **Play**, a blank Three.js canvas.

### 3️⃣ Working locally (optional)
If you later want to develop on your own machine, clone the repo and run:
```bash
npm install
npm run dev
```

### 4️⃣ Next development step
When the preview is running, let me know and I’ll add the **placeholder basketball court** (floor, backboard, hoop) to the scene.

---
### Repository layout
```
newgate-basketball/
├─ public/                # static HTML entry point
├─ src/                  # React UI and Three.js code
│   ├─ ui/                # menus and pages
│   └─ game/              # Three.js canvas, entities, physics
├─ .gitpod.yml           # Gitpod configuration (auto‑install & dev server)
├─ .gitignore            # ignores build artifacts
├─ package.json          # dependencies
├─ vite.config.ts        # Vite build config
└─ README.md             # this file
```

Feel free to open the Gitpod workspace and let me know when it’s up!