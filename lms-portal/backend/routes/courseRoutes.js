const express = require("express");
const router = express.Router();

// Available courses
const courses = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Java Fundamentals" },
  { id: 3, title: "Data Structures" }
];

// In-memory enrollments
let enrollments = [];

// Student: get courses
router.get("/", (req, res) => {
  res.json(courses);
});

// Student: enroll in a course
router.post("/enroll", (req, res) => {
  const { email, course } = req.body;

  enrollments.push({ email, course });

  res.json({
    success: true,
    message: "Enrolled successfully"
  });
});

// Admin: view enrolled students
router.get("/enrolled", (req, res) => {
  res.json(enrollments);
});

module.exports = router;
