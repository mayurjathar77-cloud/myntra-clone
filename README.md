# 🛍️ Myntra Clone - Full Stack E-Commerce Application

A fully functional e-commerce web application inspired by Myntra, built with React, Redux Toolkit, Express.js backend, and integrated with Razorpay payment gateway.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-purple)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)

## ✨ Features

- 🛒 Shopping cart and wishlist functionality
- 💳 Razorpay payment integration
- 📦 Order management and history
- 👤 User profile with loyalty points
- 📧 Email notifications for orders
- 🔍 Search and category filtering
- 📱 Fully responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mayurjathar77-cloud/myntra-clone.git
cd myntra-clone
```

2. **Install root dependencies**
```bash
npm install
```

3. **Setup Frontend**
```bash
cd frontend
npm install
```

4. **Setup Backend**
```bash
cd ../node-backend
npm install
```

### Running the Application

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd node-backend
npm start
```
Backend runs on: `http://localhost:3000`

## 📁 Project Structure

```
Myntra/
├── frontend/           # React frontend application
│   ├── components/     # Reusable components
│   ├── routes/         # Page components
│   ├── store/          # Redux store
│   ├── data/           # Configuration files
│   └── server.js       # Express server for email
├── node-backend/       # Node.js backend API
│   ├── data/           # Backend data
│   └── app.js          # Main backend server
└── README.md
```

## 🔧 Configuration

### Frontend (.env in frontend folder)
```env
FORMSPREE_ENDPOINT=your_formspree_endpoint
PORT=8080
```

### Razorpay Setup
Edit `frontend/data/razorpayConfig.js`:
```javascript
export const RAZORPAY_CONFIG = {
  KEY_ID: "rzp_test_YOUR_KEY_HERE",
  CURRENCY: "INR",
  COMPANY_NAME: "Myntra Clone",
  THEME_COLOR: "#ff3f6c",
};
```

## 🛠️ Tech Stack

**Frontend:**
- React 19.2.0
- Redux Toolkit
- React Router DOM
- Bootstrap 5
- Vite

**Backend:**
- Express.js
- Razorpay SDK
- Nodemailer

## 📝 License

MIT License

## 👨💻 Author

Mayur Jathar
- Email: jatharmayur628@gmail.com

---

⭐ Star this repo if you find it helpful!
