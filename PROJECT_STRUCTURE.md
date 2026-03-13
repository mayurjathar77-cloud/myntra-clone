# 🛍️ Myntra Clone - Clean Project Structure

## 📁 Project Organization

```
Myntra/
├── frontend/                    # React Frontend Application
│   ├── public/
│   │   ├── images/             # Product images and assets
│   │   └── index.html          # HTML template
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── BagItem.jsx
│   │   │   ├── BagSummary.jsx
│   │   │   ├── FetchItems.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HomeItem.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── routes/             # Page components
│   │   │   ├── App.jsx
│   │   │   ├── Bag.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Payment.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Wishlist.jsx
│   │   ├── store/              # Redux store and slices
│   │   │   ├── bagSlice.js
│   │   │   ├── itemsSlice.js
│   │   │   ├── ordersSlice.js
│   │   │   └── index.js
│   │   ├── css/                # Stylesheets
│   │   │   ├── index.css
│   │   │   └── Payment.css
│   │   ├── data/               # Configuration files
│   │   │   ├── emailConfig.js
│   │   │   ├── profile.js
│   │   │   └── razorpayConfig.js
│   │   └── main.jsx            # App entry point
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   ├── server.js               # Email server
│   └── .gitignore              # Frontend gitignore
├── node-backend/               # Node.js Backend API
│   ├── data/                   # Backend data files
│   │   ├── items.js
│   │   └── profile.js
│   ├── app.js                  # Main backend server
│   └── package.json            # Backend dependencies
├── deploy.bat                  # Windows deployment script
├── deploy.sh                   # Linux/Mac deployment script
├── cleanup.bat                 # Project cleanup script
├── .gitignore                  # Root gitignore
└── README.md                   # Project documentation
```

## 🚀 Quick Commands

### Development
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd node-backend
npm install
npm start
```

### Deployment
```bash
# Build and deploy to GitHub Pages
cd frontend
npm run build
npm run deploy
```

### Cleanup
```bash
# Run cleanup script (Windows)
cleanup.bat
```

## 🔧 Key Features
- Clean, organized folder structure
- Separate frontend and backend
- GitHub Pages ready
- Minimal configuration files
- Easy deployment scripts