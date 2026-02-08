const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");
const profileRoutes = require("./routes/profile");
const resumeRoutes = require("./routes/resume");
const applyRoutes = require("./routes/apply");
const path = require("path");

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", applyRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/upload-avatar", profileRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
