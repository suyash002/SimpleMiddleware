# Express Logging Middleware App

This project demonstrates how to implement custom logging middleware in an Express.js application. The middleware logs essential details about each HTTP request including the method, URL, timestamp, response status, and the time taken to process the request.

---

## 📌 Features

- Custom middleware to log:
  - HTTP Method
  - Request URL
  - Timestamp
  - Response Status Code
  - Time taken to process the request
- Organized project structure using Express Router
- Simple and clean logging output on the console

---

## 📁 Project Structure

logging-middleware-app/
├── middleware/
│ └── logger.js # Logging middleware
├── routes/
│ └── index.js # Route handlers
├── app.js # Main server file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation


---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd logging-middleware-app
npm install

🏃 Run the App
# Run normally
npm start

# Run with auto-reload (requires nodemon)
npm run dev

Sample Log Output
[2025-06-04T16:13:00.123Z] GET / - 200 - 2ms
[2025-06-04T16:13:05.456Z] GET /about - 200 - 1ms

📚 Learning Objectives
Understand how middleware works in Express

Capture and log details from request/response lifecycle

Measure performance of endpoints

Improve debugging and monitoring capabilities

🧑‍💻 Author
Suyash Upadhyay

📜 License
This project is open-source and free to use.

---
