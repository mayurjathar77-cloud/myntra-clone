# Easy Email Setup (No App Password Needed!)

## Step 1: Create Formspree Account (2 minutes)

1. Go to **https://formspree.io/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email: **jatharmayur628@gmail.com**
4. Verify your email

## Step 2: Create a Form

1. After login, click **"+ New Form"**
2. Name it: **"Myntra Payment Notifications"**
3. Click **"Create Form"**
4. You'll see your form endpoint like: `https://formspree.io/f/xyzabc123`
5. **Copy this URL**

## Step 3: Update .env File

Open `.env` and paste your Formspree endpoint:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
PORT=8080
```

## Step 4: Install Dependencies

```bash
cd d:\teks2026\REACT\my\1-pre-built-bundle\1-pre-built-bundle\myntra-clone
npm install express cors node-fetch dotenv
```

## Step 5: Start Server

```bash
node server.js
```

## Step 6: Test It!

1. Run your React Native app
2. Make a test payment
3. Check your email: **jatharmayur628@gmail.com**
4. You should receive payment confirmation! ✅

## Why Formspree?

✅ No App Passwords needed
✅ No Gmail security issues
✅ Free for 50 emails/month
✅ Works instantly
✅ Super simple setup

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify Formspree endpoint in `.env` is correct
- Make sure you verified your Formspree email

**Server error?**
- Run: `npm install node-fetch`
- Check if port 8080 is available

That's it! Much simpler than Gmail App Passwords! 🎉
