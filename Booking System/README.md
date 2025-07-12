# 🏨 Booking System API (Backend Only)

A simple and scalable backend booking system built using Node.js, Express, and MongoDB.
It supports user authentication, booking creation, cancellation, admin-level booking management, and category-based filtering.

---

## 📁 Folder Structure

```

├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ ├── authController.js
│ ├── bookingController.js
│ └── categoryController.js
├── middlewares/
│ ├── authMiddleware.js # Auth check using JWT
│ └── isAdmin.js # Admin-only route protection
├── models/
│ ├── Booking.js
│ ├── Category.js
│ └── User.js
├── routes/
│ ├── authRoutes.js
│ ├── bookingRoutes.js
│ └── categoryRoutes.js
├── .env
├── server.js
└── package.json

```

---

## 🔐 Features

### ✅ Authentication

- User registration & login (JWT based)
- Role-based access (Admin / User)
- Auth middleware

### 📦 Bookings

- Create booking (authenticated users)
- Cancel booking (authenticated users)
- Delete booking (admin only)
- Get all bookings (admin only)

### 🗂️ Categories

- Create category (admin only)
- Get all categories (public)
- Get bookings by category (auth only)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT
- **Validation:** Mongoose Schema
- **Testing:** Postman

---

## 🔗 API Endpoints

### 🔑 Auth Routes

| Method | Route              | Description   | Access |
| ------ | ------------------ | ------------- | ------ |
| POST   | /api/auth/register | Register user | Public |
| POST   | /api/auth/login    | Login user    | Public |

---

### 📦 Booking Routes

| Method | Route                    | Description        | Access |
| ------ | ------------------------ | ------------------ | ------ |
| POST   | /api/bookings            | Create booking     | User   |
| DELETE | /api/bookings/:id/cancel | Cancel own booking | User   |
| DELETE | /api/bookings/:id        | Delete any booking | Admin  |
| GET    | /api/bookings            | Get all bookings   | Admin  |

---

### 🗂️ Category Routes

| Method | Route                 | Description              | Access |
| ------ | --------------------- | ------------------------ | ------ |
| POST   | /api/categories       | Create new category      | Admin  |
| GET    | /api/categories       | Get all categories       | Public |
| GET    | /api/categories/:slug | Get bookings by category | User   |

---

## 🧪 How to Test

1. **Clone the repo**
2. Run `npm install`
3. Set your `.env` file:

```

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

```

4. Run the server:

```bash
npm start
```

5. Use **Postman** to hit the endpoints with or without token (Authorization header: `Bearer <token>`)

---

## 📌 Optional Add-ons (not implemented)

- Booking date & time selection
- Conflict validation (no double booking)
- Email confirmation
- Payment integration (Stripe, Razorpay)

---

## 🧠 What I Learned

- Role-based access control
- Secure route protection using middleware
- Building real-world REST APIs with CRUD
- Testing authenticated routes in Postman
- Organizing backend codebase for scalability

---

## 🚀 Author

**Built by Rudresh Sankpal**
🔥 Passionate backend developer | MERN stack | On a mission to build impactful APIs

---

## 🌱 Show some love

If you found this helpful, consider ⭐️ starring the repo on GitHub!
