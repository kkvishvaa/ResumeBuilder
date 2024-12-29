const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://osama131221:sainath2005@cluster0.e2ck1.mongodb.net/backend?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

const FormDataSchema = new mongoose.Schema({}, { strict: false });
const FormData = mongoose.model("FormData", FormDataSchema);
// Job Description Schema
const JobDescriptionSchema = new mongoose.Schema({
  description: String,
}, { timestamps: true });

const JobDescription = mongoose.model("JobDescription", JobDescriptionSchema);

// Job Description POST route
app.post("/api/job-description", async (req, res) => {
  try {
    const { jobDescription } = req.body;
    const jobDescriptionData = new JobDescription({ description: jobDescription });
    await jobDescriptionData.save();
    res.status(200).json({ message: "Job description saved successfully!" });
  } catch (error) {
    console.error("Error saving job description:", error);
    res.status(500).json({ message: "Failed to save job description." });
  }
});

app.post("/api/save-form-data", async (req, res) => {
  try {
    const newFormData = new FormData(req.body);
    await newFormData.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Failed to save form data." });
  }
});
app.get("/api/ats_analysis_results", async (req, res) => {
  try {
    const users = await User.find({analysis});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
