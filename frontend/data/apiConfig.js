// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? window.location.origin + '/api'
  : 'http://localhost:8081';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    items: '/items',
    profile: '/profile',
    orders: '/orders'
  }
};

export default apiConfig;