# 💸 Personal Finance Tracker API (Backend)

A secure and efficient REST API built with Node.js, Express, and MongoDB to help users manage their **income and expenses**, track insights, and get financial summaries — all while maintaining strong user authentication and access control.

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Dev Tools**: Postman, dotenv, nodemon

---

## 📁 Folder Structure

```

finance-tracker-api/
├── controllers/
│   ├── authController.js
│   ├── transactionController.js
│   └── insightsController.js
│
├── models/
│   ├── User.js
│   └── Transaction.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── isAdmin.js
│
├── routes/
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   └── insightsRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json

```

---

## 🧑‍💻 Features

### ✅ User Authentication

- Register new users
- Login & receive JWT token
- Protected routes using middleware

### ✅ Transaction Management (`/api/transactions`)

- Create income/expense entries
- Get all transactions of logged-in user
- Update or delete specific transactions (if owned)
- Filter by **type** (`income` or `expense`)

### 📊 Financial Insights (`/api/insights`)

- 💡 **/summary** → Total income & expenses
- 📈 **/monthly** → Expense breakdown by month
- 🧾 **/categories** → Expenses grouped by category
- 🕒 **/recent** → Latest transactions

---

## 🔐 Routes & Access

| Route                            | Method | Auth Required | Description             |
| -------------------------------- | ------ | ------------- | ----------------------- |
| `/api/auth/register`             | POST   | ❌            | Register a new user     |
| `/api/auth/login`                | POST   | ❌            | Login & receive JWT     |
| `/api/transactions`              | GET    | ✅            | Get all transactions    |
| `/api/transactions`              | POST   | ✅            | Add a transaction       |
| `/api/transactions/:id`          | PUT    | ✅            | Update transaction      |
| `/api/transactions/:id`          | DELETE | ✅            | Delete transaction      |
| `/api/transactions?type=expense` | GET    | ✅            | Filter by type          |
| `/api/insights/summary`          | GET    | ✅            | Income vs Expense       |
| `/api/insights/monthly`          | GET    | ✅            | Monthly expense summary |
| `/api/insights/categories`       | GET    | ✅            | Expenses by category    |
| `/api/insights/recent`           | GET    | ✅            | Recent transactions     |

---

## 🛡️ Middleware

- `authMiddleware`: Validates JWT token and attaches `req.user`
- `isAdmin`: (optional) Role-based route protection

---

## 🧪 How to Test in Postman

1. Register or login → copy the token.
2. Add the token in headers as:  
   `Authorization: Bearer <token>`
3. Start testing routes (Transactions + Insights).

---

## ✨ Author

Built with ❤️ By Rudresh

Crafted with clarity, passion, and powerful tools (AI + logic) by  
a backend-focused MERN developer on a mission 💥

---
