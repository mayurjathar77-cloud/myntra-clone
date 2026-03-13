# 🚀 GitHub Pages Deployment Guide

## Files Created:
- ✅ Updated `.gitignore` files for GitHub Pages
- ✅ Created `deploy.bat` and `deploy.sh` scripts
- ✅ Configured Vite for GitHub Pages (base: '/Myntra/')

## Quick Deployment Steps:

### 1. Build the Project
```bash
cd frontend
npm install
npm run build
```

### 2. Deploy to GitHub Pages
```bash
cd frontend
npm run deploy
```

### 3. Configure GitHub Repository
1. Push your code to GitHub
2. Go to **Settings > Pages** in your GitHub repo
3. Select **Deploy from a branch**
4. Choose **gh-pages** branch
5. Your site will be available at: `https://yourusername.github.io/Myntra/`

## Alternative: Manual Deployment
Run the deployment script:
- **Windows**: Double-click `deploy.bat`
- **Linux/Mac**: Run `./deploy.sh`

## Important Notes:
- Your Vite config is already set with `base: '/Myntra/'`
- The `gh-pages` package is already installed
- Build files will be in `frontend/dist/`
- GitHub Pages will serve from the `gh-pages` branch

## Troubleshooting:
- Ensure your repository name matches the base path in vite.config.js
- Check that GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for deployment to complete