# Email Setup Guide for Order Confirmations

## Option 1: Using Formspree (Easiest)

### Steps:
1. Go to https://formspree.io/
2. Click "Get Started" (free account)
3. Sign up with your email
4. Click "New Form"
5. Enter form name: "Myntra Order Confirmations"
6. Your email will be: jatharmayur628@gmail.com
7. Copy the endpoint URL (looks like: `https://formspree.io/f/xxxxxxxx`)
8. Open `data/emailConfig.js`
9. Replace `YOUR_FORM_ID` with your actual form ID

### Example:
```javascript
FORMSPREE_ENDPOINT: "https://formspree.io/f/mblabcde",
```

---

## Option 2: Using EmailJS (More Features)

### Steps:
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Add Email Service:
   - Go to "Email Services"
   - Click "Add New Service"
   - Choose Gmail
   - Connect your Gmail: jatharmayur628@gmail.com
4. Create Email Template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template content:
   ```
   Order Confirmation
   Payment ID: {{paymentId}}
   Order Date: {{orderDate}}
   Customer: {{customerName}}
   Items: {{items}}
   Total: {{totalAmount}}
   ```
5. Get your credentials:
   - Public Key (from Account page)
   - Service ID
   - Template ID
6. Install EmailJS: `npm install @emailjs/browser`
7. Update the code (see below)

### EmailJS Code Update:
```javascript
import emailjs from '@emailjs/browser';

const sendOrderConfirmationEmail = async (orderData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'jatharmayur628@gmail.com',
        paymentId: orderData.paymentId,
        orderDate: orderData.orderDate,
        customerName: orderData.cardHolder,
        items: orderData.items.map(item => `${item.item_name} (₹${item.current_price})`).join(', '),
        totalAmount: orderData.totalAmount,
      },
      'YOUR_PUBLIC_KEY'
    );
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
```

---

## Option 3: Backend with Nodemailer (Most Control)

If you want full control, create a backend server:

### Steps:
1. Create a backend folder
2. Install dependencies: `npm install express nodemailer cors`
3. Create `server.js`:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Generate from Google Account settings
  }
});

app.post('/api/send-email', async (req, res) => {
  const { orderDetails } = req.body;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'jatharmayur628@gmail.com',
    subject: `Order Confirmation - ${orderDetails.paymentId}`,
    html: `
      <h2>Order Confirmation</h2>
      <p><strong>Payment ID:</strong> ${orderDetails.paymentId}</p>
      <p><strong>Date:</strong> ${orderDetails.orderDate}</p>
      <p><strong>Customer:</strong> ${orderDetails.cardHolder}</p>
      <h3>Items:</h3>
      <ul>
        ${orderDetails.items.map(item => `<li>${item.item_name} - ₹${item.current_price}</li>`).join('')}
      </ul>
      <p><strong>Total Amount:</strong> ₹${orderDetails.totalAmount}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(8080, () => console.log('Server running on port 8080'));
```

4. Run server: `node server.js`
5. Update frontend to use: `http://localhost:8080/api/send-email`

---

## Recommended: Start with Formspree

For quick setup without backend, use **Formspree** (Option 1). It takes 2 minutes to set up!

## Testing

After setup, place a test order and check:
1. Browser console for any errors
2. Your email inbox (jatharmayur628@gmail.com)
3. Spam folder (first email might go there)
