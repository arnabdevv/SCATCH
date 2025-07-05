# Scatch - E-commerce Backend

## Overview

Scatch is a Node.js/Express backend for an e-commerce platform supporting user registration, login, product management, and owner/admin features. It uses MongoDB for data storage, EJS for templating, and supports image uploads for products.

---

## Folder Structure

```
├── app.js                  # Main Express app entry point
├── package.json            # Project dependencies and scripts
├── config/                 # Configuration files (DB, keys, multer)
│   ├── development.json    # MongoDB URI
│   ├── keys.js             # JWT key config
│   ├── mongooseConnection.js # MongoDB connection logic
│   └── multerConfig.js     # Multer setup for file uploads
├── controllers/            # Controller logic
│   └── authController.js   # User registration, login, logout
├── middlewares/            # Express middlewares
│   └── isLoggedin.js       # Auth middleware (JWT)
├── models/                 # Mongoose models
│   ├── ownersModel.js      # Owner schema
│   ├── productModel.js     # Product schema
│   └── userModel.js        # User schema
├── public/                 # Static files (images, CSS, etc.)
│   └── images/             # Product images
├── routes/                 # Express route handlers
│   ├── index.js            # Home/shop routes
│   ├── ownersRouter.js     # Owner/admin routes
│   ├── productsRouter.js   # Product creation routes
│   └── usersRouter.js      # User auth routes
├── utils/                  # Utility functions
│   └── generateToken.js    # JWT token generator
├── views/                  # EJS templates
│   ├── admin.ejs           # Admin dashboard
│   ├── cart.ejs            # Cart page
│   ├── createproducts.ejs  # Product creation form
│   ├── index.ejs           # Landing/login/register
│   ├── owner-login.ejs     # Owner login
│   ├── shop.ejs            # Product listing
│   └── partials/           # Header/footer partials
└── ...
```

---

## Main Features

### User Authentication

- **Register:** `/users/register` (POST)
  - Fields: `fullname`, `email`, `password`
  - Passwords are hashed with bcrypt.
- **Login:** `/users/login` (POST)
  - Fields: `email`, `password`
  - JWT token is set in cookies.
- **Logout:** `/users/logout` (GET)

### Product Management

- **Create Product:** `/products/create` (POST, owner only)
  - Fields: `name`, `price`, `discount`, `bgColor`, `panelColor`, `textColor`, `image`
  - Image is uploaded via Multer and stored as a buffer in MongoDB.
- **View Products:** `/shop` (GET, logged-in users)
  - Lists all products with images and details.

### Owner/Admin

- **Create Owner:** `/owners/create` (POST, development only)
  - Only allowed if no owner exists.
- **Admin Dashboard:** `/owners/admin` (GET)
  - Access product creation form.

### Middleware

- **isLoggedin:** Protects routes like `/shop` to ensure only authenticated users can access.

---

## Models

### User

- `fullName`: String
- `email`: String
- `password`: String (hashed)
- `cart`: Array
- `orders`: Array
- `contact`: Number
- `picture`: String

### Owner

- `fullName`: String
- `email`: String
- `password`: String
- `products`: Array
- `picture`: String
- `gstNum`: String

### Product

- `image`: Buffer
- `name`: String
- `price`: Number
- `discount`: Number (default 0)
- `bgColor`: String
- `panelColor`: String
- `textColor`: String

---

## Routes

| Route              | Method | Description                        |
| ------------------ | ------ | ---------------------------------- |
| `/`                | GET    | Landing page, register/login forms |
| `/shop`            | GET    | Product listing (auth required)    |
| `/users/register`  | POST   | Register new user                  |
| `/users/login`     | POST   | Login user                         |
| `/users/logout`    | GET    | Logout user                        |
| `/products/create` | POST   | Create new product (owner only)    |
| `/owners/create`   | POST   | Create owner (dev only)            |
| `/owners/admin`    | GET    | Admin dashboard                    |

---

## Environment Variables

- `JWT_KEY`: Secret for JWT signing
- `EXPRESS_SESSION_SECRET`: Secret for express-session
- `MONGODB_URI`: MongoDB connection string (see `config/development.json`)

---

## Setup & Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set environment variables in a `.env` file:
   ```env
   JWT_KEY=your_jwt_secret
   EXPRESS_SESSION_SECRET=your_session_secret
   ```
3. Start the server:
   ```sh
   node app.js
   ```
4. Visit [http://localhost:3000](http://localhost:3000)

---

## Notes

- Only one owner can be created (in development mode).
- Product images are stored as binary in MongoDB.
- EJS is used for all frontend rendering.
- Flash messages are used for error/success notifications.

---

## Author & License

- Author: Arnab Dinda
- License: ISC
