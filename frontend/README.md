# 🛍️ Myntra Clone - Full Stack E-Commerce Application

A fully functional e-commerce web application inspired by Myntra, built with React, Redux Toolkit, and integrated with Razorpay payment gateway.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-purple)
![Vite](https://img.shields.io/badge/Vite-7.3.1-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)

## ✨ Features

### 🛒 Shopping Features
- **Product Browsing**: Browse through a wide range of products with images and details
- **Shopping Bag**: Add/remove items to/from shopping bag
- **Wishlist**: Save favorite items for later
- **Search & Filter**: Search products and filter by categories
- **Price Calculation**: Real-time price calculation with discounts

### 💳 Payment Integration
- **Razorpay Integration**: Secure payment gateway integration
- **Demo Mode**: Test payments without Razorpay account
- **Payment Processing**: Professional payment flow with loading states
- **Order Confirmation**: Detailed order success page with order tracking

### 📦 Order Management
- **Order History**: View all past orders
- **Order Details**: Complete order information with items and payment ID
- **Email Notifications**: Automatic order confirmation emails via Formspree

### 👤 User Profile
- **Profile Management**: View and manage user profile
- **Loyalty Points**: Earn points on every purchase
- **Order Statistics**: Track total orders and spending

### 🎨 UI/UX Features
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Clean and intuitive interface
- **Loading States**: Professional loading animations
- **Toast Notifications**: User-friendly feedback messages
- **Smooth Transitions**: Page transitions and animations

## 🚀 Live Demo

[Add your deployed link here]

## 📸 Screenshots

[Add screenshots of your application]

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI Library
- **Redux Toolkit** - State Management
- **React Router DOM** - Routing
- **Bootstrap 5** - CSS Framework
- **React Icons** - Icon Library
- **Vite** - Build Tool

### Backend
- **Express.js** - Server Framework
- **Node Fetch** - HTTP Client
- **CORS** - Cross-Origin Resource Sharing

### Payment & Email
- **Razorpay** - Payment Gateway
- **Formspree** - Email Service

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/myntra-clone.git
cd myntra-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Formspree Configuration
FORMSPREE_ENDPOINT=https://formspree.io/f/xjgarbkv

# Server Port
PORT=8080
```

### 4. Configure Razorpay (Optional)

To enable real payments:

1. Sign up at [Razorpay](https://razorpay.com/)
2. Get your Test API Key from Dashboard
3. Open `data/razorpayConfig.js`
4. Replace `YOUR_RAZORPAY_KEY_HERE` with your actual key

```javascript
export const RAZORPAY_CONFIG = {
  KEY_ID: "rzp_test_YOUR_KEY_HERE", // Replace this
  CURRENCY: "INR",
  COMPANY_NAME: "Myntra Clone",
  THEME_COLOR: "#ff3f6c",
};
```

### 5. Configure Email Notifications (Optional)

To receive order confirmation emails:

1. Visit [Formspree](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint
4. Update `data/emailConfig.js`:

```javascript
export const EMAIL_CONFIG = {
  RECIPIENT_EMAIL: "your-email@gmail.com",
  FORMSPREE_ENDPOINT: "https://formspree.io/f/YOUR_FORM_ID",
};
```

## 🎯 Running the Application

### Development Mode

**Start Frontend:**
```bash
npm run dev
```
The app will run on `http://localhost:5173`

**Start Backend (Optional):**
```bash
npm run server
```
The server will run on `http://localhost:8080`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
myntra-clone/
├── components/          # Reusable React components
│   ├── BagItem.jsx
│   ├── BagSummary.jsx
│   ├── FetchItems.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HomeItem.jsx
│   └── LoadingSpinner.jsx
├── routes/             # Page components
│   ├── App.jsx
│   ├── Bag.jsx
│   ├── Home.jsx
│   ├── Payment.jsx
│   ├── ProcessingPayment.jsx
│   ├── OrderSuccess.jsx
│   ├── Orders.jsx
│   ├── Profile.jsx
│   └── Wishlist.jsx
├── store/              # Redux store and slices
│   ├── index.js
│   ├── bagSlice.js
│   ├── itemsSlice.js
│   ├── ordersSlice.js
│   ├── profileSlice.js
│   ├── wishlistSlice.js
│   └── ...
├── data/               # Configuration files
│   ├── razorpayConfig.js
│   ├── emailConfig.js
│   └── profile.js
├── css/                # Stylesheets
│   ├── index.css
│   └── Payment.css
├── public/             # Static assets
│   └── images/
├── server.js           # Express backend server
└── .env                # Environment variables
```

## 🎮 Usage Guide

### For Users

1. **Browse Products**: View products on the home page
2. **Add to Bag**: Click "Add to Bag" on any product
3. **View Bag**: Click the bag icon in the header
4. **Checkout**: Click "PLACE ORDER" button
5. **Payment**: 
   - **Demo Mode**: Click "Pay" button (no card details needed)
   - **Razorpay Mode**: Complete payment through Razorpay modal
6. **Order Success**: View order confirmation and details
7. **View Orders**: Check order history in Orders page

### For Developers

#### Adding New Products

Edit the items data in your backend or `data/items.json`:

```javascript
{
  "id": "001",
  "image": "images/1.jpg",
  "company": "Brand Name",
  "item_name": "Product Name",
  "original_price": 1999,
  "current_price": 999,
  "discount_percentage": 50,
  "rating": {
    "stars": 4.5,
    "count": 1400
  }
}
```

#### Customizing Theme

Update colors in `css/index.css` and `data/razorpayConfig.js`

## 🔐 Payment Testing

### Demo Mode (Default)
- No configuration needed
- Click "Pay" button to complete payment
- Instant order confirmation

### Razorpay Test Mode
Use these test card details:
- **Card Number**: 4111 1111 1111 1111
- **Expiry**: Any future date (e.g., 12/25)
- **CVV**: Any 3 digits (e.g., 123)
- **Name**: Any name

## 📧 Email Notifications

Order confirmation emails are sent automatically via Formspree when:
- Payment is completed successfully
- Order is placed

Email includes:
- Order ID
- Payment ID
- Order date and time
- Total amount
- List of ordered items

## 🐛 Troubleshooting

### Payment Not Completing
- Check if Razorpay key is configured correctly
- Ensure internet connection for Razorpay SDK
- Check browser console for errors
- Try demo mode if Razorpay is not configured

### Items Not Loading
- Ensure backend server is running
- Check API endpoint URLs
- Verify items data exists

### Email Not Sending
- Verify Formspree endpoint is correct
- Check Formspree dashboard for submissions
- Ensure email address is valid

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: jatharmayur628@gmail.com

## 🙏 Acknowledgments

- Inspired by [Myntra](https://www.myntra.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Payment gateway by [Razorpay](https://razorpay.com/)
- Email service by [Formspree](https://formspree.io/)

## 📞 Support

For support, email jatharmayur628@gmail.com or create an issue in the repository.

---

⭐ Star this repo if you find it helpful!
