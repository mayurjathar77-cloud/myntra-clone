# 🚀 Push to GitHub - Simple Commands

## Copy and paste these commands one by one:

### 1️⃣ Open Terminal/Command Prompt in your project folder
```
Location: d:\teks2026\REACT\my\1-pre-built-bundle\1-pre-built-bundle\myntra-clone
```

### 2️⃣ Initialize Git (First time only)
```bash
git init
```

### 3️⃣ Configure Git (First time only - Replace with your details)
```bash
git config --global user.name "Your Name"
git config --global user.email "jatharmayur628@gmail.com"
```

### 4️⃣ Add all files
```bash
git add .
```

### 5️⃣ Create first commit
```bash
git commit -m "Initial commit: Myntra Clone - Full Stack E-Commerce App with Razorpay"
```

### 6️⃣ Create Repository on GitHub
1. Go to: https://github.com/new
2. Repository name: `myntra-clone`
3. Description: `Full-stack e-commerce application with Razorpay payment integration`
4. Choose Public
5. DO NOT check "Initialize with README"
6. Click "Create repository"

### 7️⃣ Connect to GitHub (Replace YOUR_USERNAME with your GitHub username)
```bash
git remote add origin https://github.com/YOUR_USERNAME/myntra-clone.git
git branch -M main
git push -u origin main
```

### ✅ Done! Your code is now on GitHub!

---

## 🔄 For Future Updates

When you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

---

## 🌐 Your Repository URL
```
https://github.com/YOUR_USERNAME/myntra-clone
```

---

## 🎯 Quick Test Before Pushing

Make sure everything works:
```bash
npm install
npm run dev
```

Open browser: http://localhost:5173

Test:
- ✅ Add items to bag
- ✅ Complete payment
- ✅ View orders

If everything works, proceed with git commands above!

---

## 💡 Alternative: Use the Batch Script

Double-click: `push-to-github.bat`

This will automatically:
- Initialize git
- Add all files
- Commit changes
- Push to GitHub

---

## 📞 Need Help?

Read: `GITHUB_GUIDE.md` for detailed instructions
