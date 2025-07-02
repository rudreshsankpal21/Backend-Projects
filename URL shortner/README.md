# 🔗 URL Shortener API

A fully functional backend service built using **Node.js**, **Express**, and **MongoDB** that allows users to shorten long URLs into compact, easy-to-share short links — just like Bit.ly.

---

## 🚀 Features

- 🔗 Shortens long URLs to unique, trackable links
- 📁 Stores URL data in MongoDB
- 🔁 Redirects short links to original destination
- 🌍 Ready for deployment and frontend integration

---

## 🧱 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Routing and middleware
- **MongoDB + Mongoose** – Database
- **dotenv** – For environment configuration
- **Postman** – For testing the API

---

## 🧩 Folder Structure

```

📁 url-shortener
├── 📁 config // MongoDB connection
├── 📁 controllers // All business logic
├── 📁 models // Mongoose schemas
├── 📁 routes // API endpoints
├── 📁 middleware // Middleware (optional)
├── .env // Environment variables
├── server.js // Entry point
└── package.json

```

---

## 🔐 API Endpoints

### 📥 POST `/api/shorten`

Create a short URL.

#### Request Body:

```json
{
  "originalUrl": "https://www.example.com/some/very/long/link"
}
```

#### Response:

```json
{
  "shortUrl": "http://localhost:5000/s/abc123"
}
```

---

### 📤 GET `/s/:shortId`

Redirects to the original URL and increases the click count.

---

### 📊 GET `/api/:shortId` _(optional)_

Fetch metadata about the short URL.

#### Response Example:

```json
{
  "originalUrl": "...",
  "shortId": "...",
  "clicks": 5,
  "createdAt": "2024-06-11T10:30:00Z"
}
```

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=5000
MONGODB_URI=your_mongo_uri
BASE_URL=http://localhost:5000
```

---

## 🚀 Running the Project

1. Clone the repo:

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

2. Install dependencies:

```bash
npm install
```

3. Setup `.env` file with your Mongo URI and base URL.

4. Run the server:

```bash
npm run dev
```

5. Test the routes using **Postman** or **any REST client**.

---

## ✨ Author

Rudresh ❤️ –
Built with patience, bugs, coffee, and backend energy ⚙️❤️

---
