const express = require("express");
const router = express.Router();
let { courses } = require("../../db");

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/:id/enroll", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) return res.status(404).json({ message: "Course not found" });

  course.enrolled = true;
  res.json({ message: "Enrolled successfully", course });
});

router.post("/:id/unenroll", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) return res.status(404).json({ message: "Course not found" });

  course.enrolled = false;
  res.json({ message: "Unenrolled successfully", course });
});

module.exports = router;
