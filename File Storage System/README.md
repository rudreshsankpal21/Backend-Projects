# 📁 File Storage System (Backend)

A secure backend application built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary** that allows authenticated users to **upload**, **view**, and **delete** files.

---

## 🔧 Tech Stack

- **Node.js + Express** – Server-side framework
- **MongoDB + Mongoose** – Database and ODM
- **Multer** – Handles multipart/form-data for file uploads
- **Cloudinary** – Cloud-based file storage
- **JWT** – Authentication system
- **dotenv** – Secure environment variables

---

## 📂 Folder Structure

```

📁 File Storage System
├── 📁 config
│ └── cloudinary.js # Cloudinary configuration
├── 📁 controllers
│ ├── authController.js # Register/Login logic
│ └── fileController.js # File upload, view, delete
├── 📁 middleware
│ ├── authMiddleware.js # JWT-based route protection
│ └── multerMiddleware.js # Multer setup for file handling
├── 📁 models
│ ├── File.js # File schema
│ └── User.js # User schema
├── 📁 routes
│ ├── authRoutes.js # /api/auth routes
│ └── fileRoutes.js # /api/files routes
├── 📁 uploads # Temporary storage before Cloudinary
├── .env # Environment secrets
├── server.js # Entry point
└── package.json

```

---

## 🔐 Features

- ✅ **User Authentication**

  - Register & Login with hashed passwords
  - JWT-protected routes

- 📁 **File Upload**

  - Upload files via `multipart/form-data`
  - Files stored securely on **Cloudinary**
  - Metadata stored in MongoDB

- 🔍 **File Management**
  - View list of user-specific uploaded files
  - Delete files (from both DB and Cloudinary)

---

## 🧪 API Routes

### 👤 Auth Routes (`/api/auth`)

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| POST   | `/register` | Register user   |
| POST   | `/login`    | Login & get JWT |

### 📁 File Routes (`/api/files`)

| Method | Endpoint  | Description              |
| ------ | --------- | ------------------------ |
| POST   | `/upload` | Upload a file (Auth)     |
| GET    | `/`       | Get all files (Auth)     |
| DELETE | `/:id`    | Delete file by ID (Auth) |

---

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/file-storage-system.git
   cd file-storage-system
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   MONGODB_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Create `uploads/` folder**

   ```bash
   mkdir uploads
   ```

5. **Start the server**

   ```bash
   npm run dev
   ```

---

## 🚀 Author

Built with ❤️ By Rudresh

---
````
