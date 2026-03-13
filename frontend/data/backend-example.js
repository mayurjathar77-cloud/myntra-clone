// BACKEND EXAMPLE (Node.js/Express)
// This file is for reference only - NOT needed for current frontend setup
// Only create backend if you need payment verification

// Example: server.js (Backend - if you create one later)

/*
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const app = express();

// Initialize Razorpay with BOTH keys (backend only)
const razorpay = new Razorpay({
  key_id: 'rzp_test_YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET_HERE' // Secret key used HERE in backend
});

// Verify payment signature (backend only)
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", 'YOUR_KEY_SECRET_HERE')
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    // Payment verified - save to database
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000);
*/

// IMPORTANT NOTES:
// 1. Your current frontend-only setup works fine without backend
// 2. Key Secret is ONLY needed if you build a backend server
// 3. NEVER put Key Secret in frontend code or razorpayConfig.js
// 4. For learning/demo projects, frontend-only integration is sufficient
