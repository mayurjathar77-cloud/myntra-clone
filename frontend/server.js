git config --global user.name "Mayur Jathar"
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Payment endpoint
app.post('/api/payments', async (req, res) => {
  try {
    const { amount, method, cardNumber, cardHolder, date } = req.body;
    
    // Process payment logic here
    console.log('Payment received:', { amount, method, cardHolder });
    
    res.json({ success: true, message: 'Payment processed' });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

// Email notification endpoint using Formspree
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, amount, cardHolder, date } = req.body;
    
    const emailData = {
      email: to || 'jatharmayur628@gmail.com',
      subject: subject || 'Payment Confirmation',
      message: `Payment Confirmation\n\nCard Holder: ${cardHolder}\nAmount: ₹${amount}\nDate: ${date}\n\nThank you for your payment!`
    };
    
    const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData)
    });
    
    if (response.ok) {
      console.log('Email sent successfully to:', to);
      res.json({ success: true, message: 'Email sent' });
    } else {
      throw new Error('Formspree request failed');
    }
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Email failed' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
