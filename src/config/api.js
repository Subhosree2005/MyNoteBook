// API Configuration
const getApiHost = () => {
  // Check if we're in production build
  if (process.env.NODE_ENV === 'production') {
    return 'https://backend-mynotebook-xnja.onrender.com';
  }
  
  // Check if we're running on localhost
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:5000';
  }
  
  // Default to production for deployed frontend
  return 'https://backend-mynotebook-xnja.onrender.com';
};

export const API_HOST = getApiHost();

// Debug logging
console.log('API Configuration:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- Hostname:', window.location.hostname);
console.log('- API Host:', API_HOST);
