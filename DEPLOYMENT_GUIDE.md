# Deployment Guide for MyNotebook

## Backend Deployment on Render

### Environment Variables Required:
1. **MONGODB_URI** - Your MongoDB Atlas connection string
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/mynotebook?retryWrites=true&w=majority`

### Steps to Deploy:
1. Push your backend code to GitHub
2. Connect your GitHub repository to Render
3. Set the environment variable `MONGODB_URI` in Render dashboard
4. Deploy the service

## Frontend Deployment on Netlify

### Steps to Deploy:
1. Run `npm run build` in your frontend directory
2. Upload the `build` folder to Netlify
3. Your frontend is now connected to the deployed backend

## Fixed Issues:
1. ✅ Backend port configuration (now uses `process.env.PORT`)
2. ✅ CORS configuration (allows both localhost and production domains)
3. ✅ MongoDB connection (supports both `MONGODB_URI` and `mongoURI`)
4. ✅ Frontend API calls (Login and Signup now use full backend URL)

## Testing:
1. Visit your Netlify URL: https://mynotebook2005new.netlify.app
2. Try to sign up for a new account
3. Try to login with existing credentials
4. Create, edit, and delete notes

Your application should now work properly in production!
