# 🗳️ Simple Polling System - Backend API

A backend-only polling system where users can create polls, vote, and view results. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Postman (for testing)

---

## 📁 Folder Structure

```

polling-system-api/
├── controllers/
│ └── pollController.js
├── middleware/
│ ├── authMiddleware.js
│ └── isAdmin.js (optional)
├── models/
│ ├── User.js
│ └── Poll.js
├── routes/
│ ├── authRoutes.js
│ └── pollRoutes.js
├── .env
├── server.js
└── package.json

```

---

## 🔐 Authentication

- JWT-based auth system
- Login/Register routes
- All poll routes are protected

---

## 🧠 Poll Model

```js
{
  question: String,
  options: [String],
  votes: [
    {
      user: ObjectId,
      option: String
    }
  ],
  createdBy: ObjectId (ref to User),
  isClosed: Boolean,
  timestamps: true
}
```

---

## 📌 API Endpoints

| Method | Endpoint              | Description                    | Auth              |
| ------ | --------------------- | ------------------------------ | ----------------- |
| POST   | /api/polls            | Create a new poll              | ✅                |
| GET    | /api/polls            | Get all polls                  | ❌                |
| GET    | /api/polls/\:id       | Get a single poll with results | ✅                |
| POST   | /api/polls/\:id/vote  | Vote on a poll                 | ✅                |
| PUT    | /api/polls/\:id/close | Close a poll                   | ✅ (creator only) |
| DELETE | /api/polls/\:id       | Delete a poll                  | ✅ (creator only) |

---

## ✅ Features

- Create new polls with multiple options
- One vote per user per poll
- Prevent voting after poll is closed
- See all votes and results
- Role-based poll closing/deleting

---

## 🧪 Testing (Postman)

- Register/Login → Get JWT
- Pass token in `Authorization: Bearer <token>`
- Test all routes:

  - Create → `/api/polls`
  - Vote → `/api/polls/:id/vote`
  - View poll → `/api/polls/:id`
  - Close → `/api/polls/:id/close`

---

## 📚 Author

Made with ❤️ by Rudresh
Guided by ChatGPT & built with unstoppable 🔥

---
