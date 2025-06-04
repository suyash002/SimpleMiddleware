// app.js
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const indexRoutes = require("./routes/index");

// Use Middleware
app.use(logger);

// Routes
app.use("/", indexRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
