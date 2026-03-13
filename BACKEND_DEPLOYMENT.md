# 🚀 Backend Deployment Guide

## Backend Configuration Applied

### 1. Vercel Configuration Updated ✅
- Added Node.js backend build configuration
- API routes: `/api/*` → `node-backend/app.js`
- Frontend routes: `/*` → `index.html`

### 2. Backend Modified ✅
- Dynamic port configuration for Vercel
- Environment variables support
- CORS enabled for frontend

### 3. Root Package.json Created ✅
- Combined dependencies for both frontend and backend
- Build scripts for full-stack deployment

## API Endpoints

Your backend will be available at:
- `https://your-app.vercel.app/api/items` - Get all items
- `https://your-app.vercel.app/api/items/:id` - Get item by ID
- `https://your-app.vercel.app/api/profile` - Get/Update profile
- `https://your-app.vercel.app/api/orders` - Place orders

## Frontend API Configuration

Update your frontend to use the deployed API:

```javascript
// In your frontend data/backend-example.js or API calls
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-app.vercel.app/api'
  : 'http://localhost:8081';
```

## Environment Variables

Add these to Vercel dashboard:
1. Go to Vercel → Project → Settings → Environment Variables
2. Add:
   - `RAZORPAY_KEY_ID`: Your Razorpay key
   - `RAZORPAY_KEY_SECRET`: Your Razorpay secret
   - `NODE_ENV`: production

## Deployment Process

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add backend deployment config"
   git push
   ```

2. **Vercel Auto-Deploy:**
   - Frontend builds from `frontend/`
   - Backend deploys as serverless functions
   - API available at `/api/*` routes

3. **Test Deployment:**
   - Frontend: `https://your-app.vercel.app`
   - API: `https://your-app.vercel.app/api/items`

## Local Development

```bash
# Install all dependencies
npm run install:all

# Run frontend (Terminal 1)
npm run dev:frontend

# Run backend (Terminal 2)  
npm run dev:backend
```

Your full-stack app is now ready for deployment! 🎉