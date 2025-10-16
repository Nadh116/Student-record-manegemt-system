const express = require("express");
const router = express.Router();
const db = require("../db");

// ➕ Create Employee
router.post("/", (req, res) => {
    const { first_name, last_name, gender, email, phone, hire_date, department, position, salary, status } = req.body;
    const sql = `INSERT INTO employees (first_name, last_name, gender, email, phone, hire_date, department, position, salary, status)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [first_name, last_name, gender, email, phone, hire_date, department, position, salary, status], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("✅ Employee Added Successfully!");
    });
});

// 📋 Read All Employees
router.get("/", (req, res) => {
    db.query("SELECT * FROM employees", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// ✏️ Update Employee
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, gender, email, phone, hire_date, department, position, salary, status } = req.body;
    const sql = `UPDATE employees SET first_name=?, last_name=?, gender=?, email=?, phone=?, hire_date=?, department=?, position=?, salary=?, status=? WHERE employee_id=?`;
    db.query(sql, [first_name, last_name, gender, email, phone, hire_date, department, position, salary, status, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("✅ Employee Updated Successfully!");
    });
});

// ❌ Delete Employee
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE employee_id=?", [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("🗑️ Employee Deleted Successfully!");
    });
});

module.exports = router;
