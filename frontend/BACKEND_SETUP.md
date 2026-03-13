# Backend Email Setup Guide

## Quick Setup Steps

### 1. Install Backend Dependencies
```bash
cd d:\teks2026\REACT\my\1-pre-built-bundle\1-pre-built-bundle\myntra-clone
npm install express nodemailer cors dotenv
```

### 2. Configure Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" (if not already enabled)
4. Search for "App passwords" in the search bar
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Enter "Myntra Clone" as the name
8. Click "Generate"
9. Copy the 16-character password (no spaces)

### 3. Update .env File

Open `.env` file and update:
```
EMAIL_USER=jatharmayur628@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
PORT=8080
```

### 4. Start the Backend Server

```bash
node server.js
```

You should see: `Server running on http://localhost:8080`

### 5. Test the Integration

1. Start your React Native app
2. Make a payment
3. Check your email (jatharmayur628@gmail.com) for confirmation

## Troubleshooting

**Email not sending?**
- Verify App Password is correct (16 characters, no spaces)
- Check Gmail security settings
- Make sure 2-Step Verification is enabled

**Server not starting?**
- Check if port 8080 is already in use
- Run: `npm install` to ensure all dependencies are installed

**Connection refused?**
- Make sure backend server is running
- Check the IP address in Payment.jsx (should be 10.0.2.2:8080 for Android emulator)

## Files Created

- `server.js` - Backend server with payment and email endpoints
- `.env` - Email credentials (keep this private!)
- `backend-package.json` - Backend dependencies reference
