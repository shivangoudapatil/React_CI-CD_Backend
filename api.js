const express = require('express');
const router = express.Router();
const assignment = require('./routes/assignment');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// GET all assignments
router.get('/assignments', (req, res) => {
  assignment.getAllAssignments((result) => {
    res.status(200).json(result);
  });
});



// CREATE a new assignment
router.post('/assignments', (req, res) => {
    assignment.createAssignment(req.body, (result) => {
      res.status(201).send(`Assignment added with ID: ${result}`);
    });
});

// UPDATE an existing assignment
router.patch('/assignments', (req, res) => {
    assignment.updateAssignment(req.body, (result) => {
      res.status(200).send(`${result} assignment(s) updated`);
    });
});

// DELETE an assignment by ID
router.delete('/assignments', (req, res) => {
  assignment.deleteAssignmentById(req.body.id, (result) => {
    if (result === 0) {
      res.status(404).send('Assignment not found!');
    } else {
      res.status(200).send(`${result} assignment(s) deleted`);
    }
  });
});

module.exports = router;
