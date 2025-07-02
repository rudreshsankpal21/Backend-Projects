# 🔗 URL Shortener with Analytics (Backend Only)

A simple yet powerful backend-only URL shortening service built with Node.js, Express, and MongoDB. Includes click analytics with IP and device logging for each short link — all while respecting user privacy (no analytics exposed in public APIs).

---

## 🧠 Features

- 🔗 Shorten long URLs to unique, shareable links
- 🚀 Instant redirection to original URLs
- 📊 Analytics: track IP address, user-agent, and click timestamp
- 🔐 Private data design (no click info exposed publicly)
- 🧱 MongoDB models for Short URLs & Click logs
- ⚙️ Clean, modular Express architecture

---

## 📁 Folder Structure

```bash
url-shortener/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── urlController.js    # Handles shortening, redirection, and analytics
├── models/
│   ├── ShortUrl.js         # Schema for original & short URLs
│   └── Click.js            # Schema for storing click analytics
├── routes/
│   └── urlRoutes.js        # All routes related to shortening and redirecting
├── .env
├── app.js
└── server.js
```

````


## 📥 API Endpoints

### 🔗 POST `/api/shorten`

Create a short URL.

```json
{
  "originalUrl": "https://example.com/very-long-url"
}
```

**Response:**

```json
{
  "shortId": "abc123"
}
```

---

### 🚀 GET `/s/:shortId`

Redirects to the original URL and logs:

- IP address
- User-agent
- Timestamp

> 🔒 Click data is **not exposed** in public routes for user privacy.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **User-Agent + IP logging**

---

## 📦 Installation & Run Locally

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start server:

```bash
node --watch server
```

---

## 🤝 Contributions

This project is part of a personal backend-focused learning journey.
AI tools were used for suggestions, but all logic was self-built, structured, and understood.

---

## 🧠 Made with discipline & backend love by Rudresh

```

```
````
