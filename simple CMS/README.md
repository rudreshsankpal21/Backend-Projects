# 📝 Simple CMS API

A backend-only **Content Management System (CMS)** built using **Node.js**, **Express**, and **MongoDB**. It allows admin users to manage categories and posts, while authenticated users can view content. Built with role-based authentication and real-world backend structure.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 👑 Admin-only: Create new categories
- 🗃️ CRUD Operations on Posts
- 🧠 Search posts by title or content
- 🏷️ Categorize posts
- 🧑‍🤝‍🧑 Role-based access control (Admin/User)
- 🕵️ Secure API routes with middleware

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv

---

## 🗂️ Folder Structure

```

simple-cms/
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ ├── categoryController.js
│ └── postController.js
├── middlewares/
│ ├── authMiddleware.js
│ └── isAdmin.js
├── models/
│ ├── User.js
│ ├── Category.js
│ └── Post.js
├── routes/
│ ├── authRoutes.js
│ ├── categoryRoutes.js
│ └── postRoutes.js
├── .env
├── app.js
└── server.js

```

---

## 🔐 Authentication

- Register a new user → `POST /api/auth/register`
- Login → `POST /api/auth/login`
- Returns a **JWT token** to access protected routes

---

## 🛣️ API Endpoints

### 🧑‍💻 Auth Routes

| Route              | Method | Access | Description         |
| ------------------ | ------ | ------ | ------------------- |
| /api/auth/register | POST   | Public | Register new user   |
| /api/auth/login    | POST   | Public | Login existing user |

### 📚 Category Routes

| Route                 | Method | Access     | Description           |
| --------------------- | ------ | ---------- | --------------------- |
| /api/categories       | POST   | Admin only | Create new category   |
| /api/categories       | GET    | Public     | Get all categories    |
| /api/categories/:slug | GET    | Public     | Get posts by category |

### 📝 Post Routes

| Route            | Method | Access     | Description                |
| ---------------- | ------ | ---------- | -------------------------- |
| /api/posts       | POST   | Auth       | Create a post              |
| /api/posts       | GET    | Public     | Get all posts (searchable) |
| /api/posts/:slug | GET    | Public     | Get single post by slug    |
| /api/posts/:id   | PUT    | Owner only | Update a post              |
| /api/posts/:id   | DELETE | Owner only | Delete a post              |

---

## 🔎 Search

- `GET /api/posts?search=title` – Search posts by `title` or `content`.

---

## 🧪 Testing with Postman

1. Register/Login to get JWT token
2. Use `Bearer <token>` in Authorization header
3. Test protected routes like:
   - Creating posts
   - Creating categories (admin only)
   - Updating/deleting your own posts

---

## 🧑‍💼 Roles

| Role  | Permissions                   |
| ----- | ----------------------------- |
| user  | View and create posts         |
| admin | All above + create categories |

---

## 🛡️ Middlewares

- `authMiddleware` → protects routes using JWT
- `isAdmin` → restricts certain routes to admin users only

---

## 🧠 Learnings

- MongoDB relational referencing with `.populate()`
- Role-based access
- JWT Authentication system
- Middleware layering
- Controller/Route separation

---

## 🧑‍💻 Author

Built by Rudresh – as part of a self-learning journey to become a backend-focused MERN developer 🚀

---

## 🌟 Final Note

> _“Even when you don't understand it fully — build it anyway. Understanding comes from the doing.”_

---
