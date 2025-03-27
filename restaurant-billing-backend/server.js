require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mamta2004",
  database: "restaurant_billing",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database!");
  }
});

// Sample API Route
app.get("/", (req, res) => {
  res.send("Welcome to Restaurant Billing API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
