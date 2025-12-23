
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("resume"), (req, res) => {

const jobDescription = req.body.jobDesc;

  const resumeFile = req.file;

  if (!jobDescription || !resumeFile) {
    return res.json({ message: "Data missing" });
  }
  const score = Math.floor(Math.random() * 40) + 60;

 const status = score >= 70 ? "Shortlisted" : "Not Shortlisted";

  res.json({
    matchScore: score,
    result: status
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
