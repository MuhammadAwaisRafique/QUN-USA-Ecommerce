# QUN-USA Ecommerce

A full-stack ecommerce application built with React, Node.js, and Express.

## Features

- User authentication (login/register)
- Product browsing and search
- Shopping cart functionality
- Admin panel for product management
- Responsive design with Tailwind CSS

## Demo Accounts

- **Admin**: `admin@qunusa.com` / `password123`
- **Customer**: `user@qunusa.com` / `password123`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173)

## Deployment

This project is configured for deployment on Render.com.

### Deploy to Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com) and create an account
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: qunusa-ecommerce
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Click "Create Web Service"

Your app will be deployed and available at a URL like: `https://qunusa-ecommerce.onrender.com`

## Project Structure

```
project/
├── src/                 # React frontend
├── server/              # Express backend
│   ├── routes/          # API routes
│   ├── data/            # JSON data files
│   └── utils/           # Utility functions
├── dist/                # Built React app (generated)
├── server.js            # Production server
└── package.json         # Dependencies and scripts
```

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/products` - Get all products
- `GET /api/categories` - Get all categories
- `POST /api/orders` - Create order
- `GET /api/health` - Health check 