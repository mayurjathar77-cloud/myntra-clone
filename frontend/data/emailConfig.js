// Email Notification Configuration

export const EMAIL_CONFIG = {
  // Your email where order notifications will be sent
  RECIPIENT_EMAIL: "jatharmayur628@gmail.com",
  
  // Create your own Formspree endpoint:
  // 1. Go to https://formspree.io/
  // 2. Click "Get Started" or "Sign Up"
  // 3. Create a new form
  // 4. Copy your form endpoint (looks like: https://formspree.io/f/YOUR_FORM_ID)
  // 5. Replace the endpoint below with your own
  FORMSPREE_ENDPOINT: "https://formspree.io/f/xjgarbkv",
  
  // Email subject template
  SUBJECT_TEMPLATE: (orderId) => `New Order Confirmation - ${orderId}`,
};

// SETUP INSTRUCTIONS:
// 1. Visit https://formspree.io/ and sign up (free)
// 2. Create a new form with your email: jatharmayur628@gmail.com
// 3. Copy the form endpoint URL
// 4. Replace YOUR_FORM_ID above with your actual form ID
// 5. Test by placing an order

// Alternative: Use EmailJS (also free)
// Visit https://www.emailjs.com/ for another option
