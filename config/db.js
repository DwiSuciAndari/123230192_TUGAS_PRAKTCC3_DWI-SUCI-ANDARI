const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "34.172.113.167",
  user: "admin",
  password: "mypassword",
  database: "notes_123230192",
});

db.connect((err) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;
