# 0xmfbk Portfolio

This is a Next.js portfolio project with 3D effects, ready for static export and deployment to GitHub Pages as `0xmfbk.github.io`.

## Getting Started

1. **Install dependencies:**
   - Using pnpm (recommended):
     ```sh
     pnpm install
     ```
   - Or using npm:
     ```sh
     npm install
     ```

2. **Build and Export:**
   ```sh
   pnpm build
   pnpm export
   ```
   The static site will be in the `out/` folder.

3. **Deploy to GitHub Pages:**
   - Push your code to a repository named `0xmfbk.github.io`.
   - Use the included GitHub Actions workflow for automatic deployment.

## GitHub Actions

A workflow is included at `.github/workflows/deploy.yml` to automatically build and deploy the site to the `main` branch for GitHub Pages.

---

For any issues, open an issue on GitHub or contact 0xmfbk. 