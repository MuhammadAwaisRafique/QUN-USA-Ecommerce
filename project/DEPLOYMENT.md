# Deployment Guide - QUN-USA Ecommerce

## Step-by-Step Deployment to Render.com

### Prerequisites
- GitHub account
- Render.com account (free)

### Step 1: Prepare Your Code
1. Make sure all changes are committed to your local repository
2. Your project is now ready for deployment with the following files:
   - `server.js` - Production server
   - `render.yaml` - Render configuration
   - Updated `package.json` with start script

### Step 2: Push to GitHub
1. Create a new repository on GitHub (if not already done)
2. Push your code:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

### Step 3: Deploy on Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" button
3. Select "Web Service"
4. Connect your GitHub account and select your repository
5. Configure the service:
   - **Name**: `qunusa-ecommerce` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Click "Create Web Service"

### Step 4: Wait for Deployment
- Render will automatically build and deploy your application
- This process takes 5-10 minutes
- You'll see build logs in real-time

### Step 5: Access Your App
- Once deployed, you'll get a URL like: `https://qunusa-ecommerce.onrender.com`
- Your app is now live and accessible worldwide!

## Alternative Free Platforms

### 1. Vercel (Frontend Only)
- Good for React apps
- Automatic deployments from GitHub
- Free tier available

### 2. Netlify (Frontend Only)
- Similar to Vercel
- Easy deployment from GitHub
- Free tier available

### 3. Railway
- Full-stack deployment
- Free tier available
- Easy database integration

### 4. Heroku (Limited Free Tier)
- Full-stack deployment
- Free tier discontinued but still popular

## Troubleshooting

### Common Issues:
1. **Build fails**: Check build logs for errors
2. **Port issues**: Make sure using `process.env.PORT`
3. **API not working**: Check CORS settings
4. **Static files not serving**: Verify `dist` folder exists

### Environment Variables:
If you need to add environment variables later:
1. Go to your Render dashboard
2. Select your service
3. Go to "Environment" tab
4. Add key-value pairs

## Demo Accounts (After Deployment)
- **Admin**: `admin@qunusa.com` / `password123`
- **Customer**: `user@qunusa.com` / `password123`

Your deployed app will have the same functionality as your local version! 