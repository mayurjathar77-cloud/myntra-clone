# 📤 GitHub Deployment Guide

## Step-by-Step Instructions to Push Your Code to GitHub

### Prerequisites
- Git installed on your computer
- GitHub account created
- Code is working locally

---

## 🔧 Step 1: Initialize Git Repository

Open terminal in your project folder and run:

```bash
cd d:\teks2026\REACT\my\1-pre-built-bundle\1-pre-built-bundle\myntra-clone
git init
```

---

## 📝 Step 2: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "jatharmayur628@gmail.com"
```

---

## 📦 Step 3: Add All Files

```bash
git add .
```

---

## 💾 Step 4: Create First Commit

```bash
git commit -m "Initial commit: Myntra Clone with Razorpay integration"
```

---

## 🌐 Step 5: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right)
3. Select **"New repository"**
4. Fill in details:
   - **Repository name**: `myntra-clone`
   - **Description**: `Full-stack e-commerce application with Razorpay payment integration`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

---

## 🔗 Step 6: Connect Local to GitHub

Copy the commands from GitHub (they look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/myntra-clone.git
git branch -M main
git push -u origin main
```

**OR** if you're using SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/myntra-clone.git
git branch -M main
git push -u origin main
```

---

## ✅ Step 7: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. README.md will be displayed on the main page

---

## 🔄 Future Updates

When you make changes to your code:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🚀 Optional: Deploy to Vercel/Netlify

### Deploy to Vercel:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variables (if needed)
7. Click "Deploy"

### Deploy to Netlify:

1. Go to https://netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

---

## 📋 Checklist Before Pushing

- [ ] Code is working locally (`npm run dev`)
- [ ] All dependencies installed (`npm install`)
- [ ] No sensitive data in code (API keys, passwords)
- [ ] .gitignore is properly configured
- [ ] README.md is updated
- [ ] All files are committed

---

## 🐛 Common Issues & Solutions

### Issue: "fatal: not a git repository"
**Solution**: Run `git init` first

### Issue: "Permission denied (publickey)"
**Solution**: Use HTTPS URL instead of SSH, or set up SSH keys

### Issue: "Updates were rejected"
**Solution**: 
```bash
git pull origin main --rebase
git push origin main
```

### Issue: Large files error
**Solution**: Check .gitignore and remove large files:
```bash
git rm --cached <large-file>
git commit -m "Remove large file"
```

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- Contact: jatharmayur628@gmail.com

---

## 🎉 Congratulations!

Your code is now on GitHub and ready to share with the world!

**Next Steps:**
- Add screenshots to README
- Create a demo video
- Share your repository link
- Deploy to production

---

**Repository URL Format:**
`https://github.com/YOUR_USERNAME/myntra-clone`

**Live Demo URL (after deployment):**
`https://myntra-clone-YOUR_USERNAME.vercel.app`
