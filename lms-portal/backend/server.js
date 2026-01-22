const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROOT
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

app.listen(5000, () => {
  console.log("Simple backend running on port 5000");
});
