# Payment & Email Setup Instructions

## 1. Razorpay Setup

### Get Razorpay API Keys:
1. Go to https://razorpay.com/
2. Sign up / Login
3. Go to Settings → API Keys
4. Generate Test Keys (Key ID and Key Secret)
5. Copy the **Key ID**

### Update Frontend:
Open `routes/Payment.jsx` and replace:
```javascript
key: "rzp_test_YOUR_KEY_ID"
```
With your actual Razorpay Key ID

## 2. Email Setup (Gmail)

### Enable App Password:
1. Go to your Google Account: https://myaccount.google.com/
2. Security → 2-Step Verification (Enable it)
3. Security → App passwords
4. Select app: Mail
5. Select device: Other (Custom name) → "Myntra Clone"
6. Click Generate
7. Copy the 16-character password

### Update Backend:
Open `node-backend/app.js` and replace:
```javascript
user: 'your-email@gmail.com',  // Your Gmail
pass: 'your-app-password'      // 16-character app password
```

Also update the 'from' email:
```javascript
from: 'your-email@gmail.com'
```

## 3. Install Dependencies

### Backend:
```bash
cd node-backend
npm install nodemailer
```

### Frontend:
No additional packages needed (Razorpay loaded via CDN)

## 4. Test Payment Flow

1. Start backend: `node app.js`
2. Start frontend: `npm run dev`
3. Add items to bag
4. Click "PLACE ORDER"
5. Click "Pay ₹XXX" on payment page
6. Use Razorpay test cards:
   - Card: 4111 1111 1111 1111
   - CVV: Any 3 digits
   - Expiry: Any future date
7. Complete payment
8. Check email at jatharmayur628@gmail.com

## Features:
✅ Razorpay payment gateway
✅ Order confirmation email
✅ Payment ID tracking
✅ Loyalty points on purchase
✅ Profile update after order
✅ Bag cleared after payment
