# 🚀 Deploy to GitHub - Step by Step Guide

## Prerequisites
- Git installed on your system
- GitHub account created

## Step 1: Install Git (if not installed)
Download and install Git from: https://git-scm.com/download/win

## Step 2: Configure Git (First time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Initialize Git Repository
Open terminal in project root folder and run:
```bash
git init
```

## Step 4: Add All Files
```bash
git add .
```

## Step 5: Create First Commit
```bash
git commit -m "Initial commit: Myntra clone full-stack application"
```

## Step 6: Create GitHub Repository
1. Go to https://github.com
2. Click on "+" icon (top right) → "New repository"
3. Repository name: `myntra-clone` (or any name you prefer)
4. Description: "Full-stack e-commerce application with React and Node.js"
5. Choose "Public" or "Private"
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 7: Connect to GitHub
Copy the commands from GitHub (they will look like this):
```bash
git remote add origin https://github.com/YOUR_USERNAME/myntra-clone.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 8: Push to GitHub
```bash
git push -u origin main
```

## 🎉 Done! Your project is now on GitHub!

Visit: `https://github.com/YOUR_USERNAME/myntra-clone`

## 📝 Future Updates

When you make changes to your code:
```bash
git add .
git commit -m "Description of changes"
git push
```

## 🌐 Deploy Live (Optional)

### Frontend Deployment Options:
1. **Vercel** (Recommended for React)
   - Visit: https://vercel.com
   - Import your GitHub repository
   - Set build command: `cd frontend && npm run build`
   - Set output directory: `frontend/dist`

2. **Netlify**
   - Visit: https://netlify.com
   - Import your GitHub repository
   - Set build command: `cd frontend && npm run build`
   - Set publish directory: `frontend/dist`

3. **GitHub Pages**
   - Add to `frontend/vite.config.js`:
   ```javascript
   base: '/myntra-clone/'
   ```
   - Build: `npm run build`
   - Deploy dist folder to gh-pages branch

### Backend Deployment Options:
1. **Render** (Free tier available)
   - Visit: https://render.com
   - Create new Web Service
   - Connect GitHub repository
   - Root directory: `node-backend`
   - Build command: `npm install`
   - Start command: `npm start`

2. **Railway**
   - Visit: https://railway.app
   - Import GitHub repository
   - Select `node-backend` folder

3. **Heroku**
   - Visit: https://heroku.com
   - Create new app
   - Connect GitHub repository

## ⚠️ Important Notes

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - .env files (already in .gitignore)

2. **Update README.md:**
   - Add your GitHub username
   - Add live demo link after deployment
   - Add screenshots

3. **Environment Variables:**
   - Set them in deployment platform settings
   - Don't hardcode in source files

## 🆘 Troubleshooting

**Error: "git is not recognized"**
- Install Git from https://git-scm.com
- Restart terminal after installation

**Error: "Permission denied"**
- Check GitHub credentials
- Use personal access token instead of password

**Error: "Repository already exists"**
- Use: `git remote set-url origin NEW_URL`

## 📞 Need Help?
- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial
