const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "WeeRot@#0127", 
  database: "mechanic_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected");
  }
});

// Register Mechanic (POST Request)
app.post("/register-mechanic", (req, res) => {
  const { name, phone, place } = req.body;
  const sql = "INSERT INTO mechanics (name, phone, place) VALUES (?, ?, ?)";
  db.query(sql, [name, phone, place], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Mechanic registered successfully" });
  });
});

// Search Mechanics by Place (GET Request)
app.get("/mechanics", (req, res) => {
  const { place } = req.query;
  const sql = "SELECT name, phone, place FROM mechanics WHERE place = ?";
  db.query(sql, [place], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Start Server
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
