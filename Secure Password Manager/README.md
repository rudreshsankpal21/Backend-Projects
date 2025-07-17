# 🔐 Secure Password Manager

A backend-only password manager built with **Node.js**, **Express**, and **MongoDB**, allowing users to **securely store, manage, and organize passwords** by service or category. This project focuses on **encryption, privacy, and real-world insights** for users.

---

## 🚀 Features

- 🔒 **User Authentication (JWT-based)**
- 🔐 **Password Encryption with `crypto` module** before saving to database
- 🗂️ **Categorize Passwords by service type**
- ✏️ Full **CRUD operations** on stored credentials
- ⚙️ Modular, extendable codebase

---

## 📁 Folder Structure

```
secure-password-manager/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── passwordController.js
│
│
├── middleware/
    ├── isAdmin.js
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Password.js
│
├── routes/
│   ├── authRoutes.js
│   └── passwordRoutes.js
│
├── utils/
│   └── encryption.js
│
├── .env
├── app.js
├── server.js
└── package.json
```

---

## ⚙️ Tech Stack

- **Node.js**, **Express.js**
- **MongoDB** with **Mongoose**
- **bcryptjs** – hash user passwords
- **crypto** – AES encryption for password fields
- **jsonwebtoken** – auth middleware

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/secure-password-manager.git
cd secure-password-manager
npm install
```

---

### 🔐 Auth Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

### 🔏 Password Routes (Protected)

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| POST   | `/api/passwords`        | Add a new password (encrypted) |
| GET    | `/api/passwords/:id`    | get a password by id           |
| GET    | `/api/passwords`        | Fetch all passwords            |
| PUT    | `/api/passwords/:id`    | Update password                |
| DELETE | `/api/passwords/:id`    | Delete password                |
| GET    | `/api/passwords/search` | Search Password by serviceName |

---

Response example:

```json
{
  "Social": 3,
  "Banking": 1,
  "Work": 5
}
```

---

## 🔐 Password Encryption Workflow

- Instead of storing plaintext passwords, this app:

  - Uses **AES-256 encryption** from the `crypto` module
  - Encrypts passwords before saving
  - Decrypts when retrieving, only for authorized users

Example (encrypted in DB):

```
"encryptedPassword": "d0848ad1f847fae..."
```

---

## 🧠 Possible Future Improvements

- 📱 Send OTP for password reset
- 🧠 Add password strength score
- 📥 Import/export credentials as encrypted files
- 🧩 Integrate Google OAuth

---

## ✅ Project Status

🎯 **Completed**
📚 Built this professionally — including hashing, encryption, authentication.

---

## 👑 Author

Built with 🔥 by Rudresh
Part of the **8 Backend Project Series** 🛠️
