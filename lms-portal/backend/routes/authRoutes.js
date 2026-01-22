const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Admin credentials
  if (email === "admin@gmail.com") {
    if (password !== "admin123") {
      return res.json({
        success: false,
        message: "Invalid admin password"
      });
    }

    return res.json({
      success: true,
      user: {
        email,
        role: "admin"
      }
    });
  }

  // Student login (no password required for demo)
  return res.json({
    success: true,
    user: {
      email,
      role: "student"
    }
  });
});

module.exports = router;
