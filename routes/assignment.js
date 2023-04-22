const express = require('express');
const router = express.Router();
const db = require('../db');


// GET all assignments
function getAllAssignments(callback) {
  const sql = 'SELECT * FROM assignments';
  db.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
}

// CREATE a new assignment
function createAssignment(assignment, callback) {
  const sql = 'INSERT INTO assignments (id, assignment_name, due_date) VALUES (?, ?, ?)';
  db.query(sql, [assignment.id, assignment.assignment_name, assignment.due_date], (err, result) => {
    if (err) throw err;
    callback(result.insertId);
  });
}

// UPDATE an existing assignment by ID
function updateAssignment(assignment, callback) {
  const sql = 'UPDATE assignments SET assignment_name = ?, due_date = ? WHERE id = ?';
  db.query(sql, [assignment.assignment_name, assignment.due_date, assignment.id], (err, result) => {
    if (err) throw err;
    callback(result.affectedRows);
  });
}

// DELETE an assignment by ID
function deleteAssignmentById(id, callback) {
  const sql = 'DELETE FROM assignments WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    callback(result.affectedRows);
  });
}

module.exports = {
  getAllAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignmentById
};
