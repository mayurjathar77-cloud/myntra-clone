const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');

const { getStoredItems, storeItems } = require('./data/items');
const { getProfile, storeProfile } = require('./data/profile');

const app = express();

// Razorpay Configuration
const razorpay = new Razorpay({
  key_id: 'rzp_test_SPuuwkN39Qy60O',
  key_secret: 'szytEnxM1c8zF9g7rC2xbzcH'  // Replace with your actual Test Key Secret from Razorpay Dashboard
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
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 400));
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.get('/profile', async (req, res) => {
  try {
    const profile = await getProfile();
    res.json({ profile });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.put('/profile', async (req, res) => {
  try {
    const profileData = req.body;
    await storeProfile(profileData);
    res.json({ message: 'Profile updated successfully', profile: profileData });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

app.post('/orders', async (req, res) => {
  try {
    const orderData = req.body;
    const order = {
      ...orderData,
      id: 'ORD' + Date.now(),
    };
    console.log('Order placed:', order);

    // Create test account (only for development)
    let testAccount = await nodemailer.createTestAccount();

    // Send email using Ethereal (test email service)
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    const itemsList = order.items.map(item => 
      `${item.item_name} - ${item.company} (₹${item.current_price})`
    ).join('\n');

    const mailOptions = {
      from: testAccount.user,
      to: 'jatharmayur628@gmail.com',
      subject: `New Order Placed - ${order.id}`,
      text: `Order Details:\n\nOrder ID: ${order.id}\nCustomer: ${order.customerName}\nEmail: ${order.customerEmail}\nTotal Amount: ₹${order.totalAmount}\nPayment ID: ${order.paymentId}\nOrder Date: ${new Date(order.orderDate).toLocaleString()}\n\nItems:\n${itemsList}\n\nStatus: ${order.status}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    console.log('Check email at: https://ethereal.email/messages');

    res.status(201).json({ 
      message: 'Order placed successfully', 
      order,
      emailPreview: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

app.listen(8081, () => {
  console.log('Server running on http://localhost:8081');
});
