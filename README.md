# **🔥 MERN-Backend Projects Portfolio**

This repository showcases **8 real-world backend projects (beginner/intermediate)**, each crafted with **Node.js, Express, and MongoDB** to demonstrate **clean architecture**, **scalable APIs**, and **production-level code quality**.

I built these projects with a **27-day coding streak**, combining my own logic, debugging skills, and AI tools like ChatGPT and Windsurf for code reviews and optimizations.

> **Goal:** To master backend development and create a solid portfolio that proves I can build **real-world, job-ready systems**.

---

## **🚀 Projects Overview**

### **1. [File Storage System](#)** 📂

**A cloud-based file upload and management API.**

- Upload files with Multer + Cloudinary.
- Metadata tracking (size, type, path).
- Delete files securely.
- Clean API endpoints with authentication.

---

### **2. [URL Shortener with Analytics](#)** 🔗

**A URL shortener API with click analytics.**

- Generate unique short URLs.
- Redirect to original URL.
- Track **IP**, **user-agent**, and click count.
- GDPR/DPDP-ready for privacy.

---

### **3. [Simple CMS](#)** 📰

**Content management backend with categories & posts.**

- Admin-only category creation.
- CRUD for posts with **search & filter** features.
- Role-based access control.
- Linked posts & categories via `populate()`.

---

### **4. [Simple Polling System](#)** 📊

**Poll creation and voting API.**

- Admin creates polls with options.
- Users cast one vote per poll.
- Real-time vote count aggregation.
- Lightweight but production-grade logic.

---

### **5. [Booking System](#)** 📅

**Resource booking & management backend.**

- Users: Create & cancel bookings.
- Admin: Manage all bookings.
- Search/filter resources with regex queries.
- Role-based routes (auth + admin middleware).

---

### **6. [Personal Finance Tracker](#)** 💰

**Track your income, expenses, and insights.**

- CRUD operations for transactions.
- Filters by type (income/expense).
- Insights:

  - **Expenses by category**.
  - **Monthly trends**.
  - **Recent transactions**.

---

### **7. [Secure Password Manager](#)** 🔐

**Store and manage credentials with encryption.**

- Encrypt passwords using **Node Crypto**.
- Hash master passwords with bcryptjs.
- CRUD operations for credentials.
- Security-focused API design.

---

### **8. [Basic Banking System](#)** 🏦

**Banking API with transaction management.**

- Deposit, withdraw, transfer money.
- Transaction history per user.
- **Low balance alerts.**
- Admin dashboard to manage accounts.

---

## **⚡ Common Features Across All Projects**

- **JWT Authentication** with refresh token flow (where needed).
- **Role-based Access Control (RBAC)**: Admin/User routes separated.
- **MVC Architecture**: Clean separation of controllers, models, and routes.
- **Error Handling**: Consistent response patterns for production readiness.
- **Security**: Password hashing, validation, and encryption practices.
- **Postman Testing**: Every route tested thoroughly.

---

## **📂 Common Folder Structure**

```
project-name/
│
├── config/          # DB connection & environment setup
├── controllers/     # Core business logic
├── middleware/      # Auth & role verification
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── utils/           # Helper utilities (encryption, cloud, etc.)
├── server.js        # App entry point
└── package.json
```

---

## **🛠 How to Run Any Project**

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd project-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variables** in `.env`

   ```
   PORT=5000
   MONGO_URI=<your_mongo_uri>
   JWT_SECRET=<your_secret>
   ```

4. **Run the project**

   ```bash
   npm start
   ```

---

## **🔥 Highlights of My Journey**

- **27+ day GitHub commit streak** (pure backend grind).
- Debugged and built 8 production-grade APIs.
- Understood **real-world patterns** like role-based access, insights, and analytics.
- Balanced **college, internship tasks, and project streaks**.

---

## **📌 What's Next?**

I’m moving towards **DSA in JavaScript** and **DevOps** to complete my backend mastery before 2027.

> **This portfolio already proves I can build, debug, and deploy real-world systems.**

---

### **💬 Motivation**

_"A single day of discipline can set the tone for an entire lifetime of success."_

### THANK YOU FOR VISITING HERE 🙏

### I HOPE YOU ENJOYED MY JOURNEY
