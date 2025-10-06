const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// /api/students
router.get('/', studentController.getAllStudents);
router.post('/', studentController.createStudent);

// /api/students/:id
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
