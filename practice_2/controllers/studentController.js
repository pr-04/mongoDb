const Student = require('../models/Student');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    const student = new Student({ name, age, course });
    await student.save();
    res.status(201).json({ message: 'Student created', student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single student by id
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update student by id
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const student = await Student.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student updated', student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete student by id
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student deleted', student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
