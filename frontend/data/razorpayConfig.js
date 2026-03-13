// Razorpay Configuration
// Get your keys from: https://dashboard.razorpay.com/app/keys

export const RAZORPAY_CONFIG = {
  // IMPORTANT: Replace with YOUR Razorpay Test Key
  // Steps to get your key:
  // 1. Go to https://razorpay.com/ and sign up
  // 2. Login to Dashboard
  // 3. Go to Settings > API Keys
  // 4. Generate Test Key and copy it here
  
  KEY_ID: "YOUR_RAZORPAY_KEY_HERE", // Replace this with your actual key
  
  // Production Key (uncomment when going live)
  // KEY_ID: "rzp_live_YOUR_LIVE_KEY",
  
  CURRENCY: "INR",
  COMPANY_NAME: "Myntra Clone",
  COMPANY_LOGO: "/images/myntra_logo.webp",
  THEME_COLOR: "#ff3f6c",
};

// Test Card Details (after getting your key):
// Card Number: 4111 1111 1111 1111
// Expiry: Any future date
// CVV: Any 3 digits
