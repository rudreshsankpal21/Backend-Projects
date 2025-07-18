# **Simple Banking System API** 🏦

A backend banking application built with **Node.js, Express, and MongoDB**. It supports user authentication, account transactions (deposit, withdraw, transfer), balance tracking, and **admin-only controls**.

---

## **Features** 🚀

- **JWT Authentication**: Secure login & registration with token-based authentication.
- **Account Operations**:

  - Deposit money
  - Withdraw money
  - Transfer money to another user

- **Transaction History**: Track all account activities.
- **Low Balance Alert**: Alerts when balance falls below a set threshold (e.g., ₹100).
- **Admin Controls**:

  - View all users and their balances
  - Delete user accounts
  - View all transactions (admin)

- **Secure Password Hashing** using **bcryptjs**.
- **Clean Role-Based Authorization** with `authMiddleware` and `isAdmin`.

---

## **Tech Stack** 🛠️

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Testing Tool**: Postman

---

## **API Endpoints** 📌

### **Auth Routes**

| Method | Endpoint             | Description                             | Protected |
| ------ | -------------------- | --------------------------------------- | --------- |
| POST   | `/api/auth/register` | Register new user                       | ❌        |
| POST   | `/api/auth/login`    | Login user                              | ❌        |
| POST   | `/api/auth/logout`   | Logout user (client-side token removal) | ✅        |

---

### **Admin Routes**

| Method | Endpoint                  | Description           | Protected  |
| ------ | ------------------------- | --------------------- | ---------- |
| GET    | `/api/admin/users`        | View all users        | ✅ (Admin) |
| GET    | `/api/admin/transactions` | View all transactions | ✅ (Admin) |
| GET    | `/api/admin/users/:id`    | Get a user by id      | ✅ (Admin) |
| DELETE | `/api/admin/users/:id`    | Delete a user account | ✅ (Admin) |

---

### **Banking Routes**

| Method | Endpoint                | Description                    | Protected |
| ------ | ----------------------- | ------------------------------ | --------- |
| POST   | `/api/account/deposit`  | Deposit money to account       | ✅        |
| POST   | `/api/account/withdraw` | Withdraw money from account    | ✅        |
| POST   | `/api/account/transfer` | Transfer money to another user | ✅        |
| GET    | `/api/account/history`  | Get user’s transaction history | ✅        |

---

## **Folder Structure** 📂

```
Simple-Banking-System/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── adminController.js   # Admin-specific logic
│   └── transactionController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── isAdmin.js
│
├── models/
│   ├── User.js
│   └── Transaction.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── adminRoutes.js
│   └── transactionRoutes.js
│
├── server.js
└── package.json
```

---

## **How to Run** 🏃‍♂️

1. **Clone the repo**

   ```bash
   git clone <repo-url>
   cd Simple-Banking-System
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add a `.env` file**

   ```
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

4. **Start server**

   ```bash
   npm start
   ```

---

## **Extras We Added** 🌟

- **Low Balance Alert**: Alert when balance < ₹100.
- **Role-Based Authorization** (user vs admin).
- **Admin APIs** for managing users and transactions.

---

✨ Author
Built with ❤️ By Rudresh

Crafted with clarity, passion, and powerful tools (AI + logic) by
a backend-focused MERN developer on a mission 💥
