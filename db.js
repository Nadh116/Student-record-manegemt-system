const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",     // default in XAMPP
  password: "",     // leave blank unless you set one
  database: "employee_management",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

module.exports = db;
