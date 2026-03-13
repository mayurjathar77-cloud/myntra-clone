# 🔧 GitHub Pages 404 Error Fix

## Common Causes & Solutions

### 1. Repository Name Mismatch
**Problem:** Base path doesn't match repository name
**Solution:** Update `vite.config.js` base path to match your repo name

```js
// If your repo is named "myntra-clone"
base: '/myntra-clone/'

// If your repo is named "Myntra"
base: '/Myntra/'
```

### 2. GitHub Pages Not Enabled
**Steps to Enable:**
1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` → `/ (root)`
5. Save

### 3. Build & Deploy Issues
**Fix Commands:**
```bash
cd frontend
npm run build
npm run deploy
```

### 4. Router Configuration (SPA)
Add this to your `public/` folder as `_redirects`:
```
/*    /index.html   200
```

### 5. Check Your GitHub Pages URL
Your site should be at:
- `https://yourusername.github.io/repository-name/`

### 6. Wait for Deployment
- GitHub Pages can take 5-10 minutes to update
- Check the Actions tab for deployment status

## Quick Fix Script
Run this if you're still getting 404:

```bash
# 1. Update base path in vite.config.js to match your repo name
# 2. Rebuild and redeploy
cd frontend
npm run build
npm run deploy

# 3. Check GitHub Pages settings
# 4. Wait 5-10 minutes
```

## Verify Deployment
1. Check if `gh-pages` branch exists
2. Verify files are in the branch
3. Confirm GitHub Pages is pointing to `gh-pages` branch
4. Check the repository name matches the base path