const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');

const app = express();

// Mock data for deployment
const mockItems = [
  {
    id: "001",
    item_name: "Carlton London",
    company: "Berrylush",
    current_price: 606,
    original_price: 1045,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
    image: "images/1.jpg"
  },
  {
    id: "002",
    item_name: "CUKOO",
    company: "CUKOO",
    current_price: 1507,
    original_price: 2599,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 5200,
    },
    image: "images/2.jpg"
  },
  {
    id: "003",
    item_name: "NUEVOSDAMAS",
    company: "NUEVOSDAMAS",
    current_price: 495,
    original_price: 1599,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.1,
      count: 249,
    },
    image: "images/3.jpg"
  },
  {
    id: "004",
    item_name: "ADIDAS",
    company: "ADIDAS",
    current_price: 999,
    original_price: 1599,
    discount_percentage: 38,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 5.0,
      count: 146,
    },
    image: "images/4.jpg"
  },
  {
    id: "005",
    item_name: "Roadster",
    company: "Roadster",
    current_price: 489,
    original_price: 1399,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 3500,
    },
    image: "images/5.jpg"
  }
];

const mockProfile = {
  name: "Mayur Jathar",
  email: "jatharmayur628@gmail.com",
  phone: "+91 9876543210",
  loyaltyPoints: 2500
};

// Razorpay Configuration
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_SPuuwkN39Qy60O',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'szytEnxM1c8zF9g7rC2xbzcH'
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/items', async (req, res) => {
  await new Promise((resolve) => setTimeout(() => resolve(), 400));
  res.json({ items: mockItems });
});

app.get('/items/:id', async (req, res) => {
  const item = mockItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.get('/profile', async (req, res) => {
  res.json({ profile: mockProfile });
});

app.put('/profile', async (req, res) => {
  const profileData = req.body;
  res.json({ message: 'Profile updated successfully', profile: profileData });
});

app.post('/orders', async (req, res) => {
  try {
    const orderData = req.body;
    const order = {
      ...orderData,
      id: 'ORD' + Date.now(),
    };

    res.status(201).json({ 
      message: 'Order placed successfully', 
      order
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

app.listen(process.env.PORT || 8081, () => {
  console.log('Server running on port', process.env.PORT || 8081);
});

module.exports = app;