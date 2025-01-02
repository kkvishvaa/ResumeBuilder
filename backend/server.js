const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/resumecode', { useNewUrlParser: true, useUnifiedTopology: true })
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

    // Check if a job description already exists
    const existingJobDescription = await JobDescription.findOne();

    if (existingJobDescription) {
      // Update the existing job description
      existingJobDescription.description = jobDescription;
      await existingJobDescription.save();
      res.status(200).json({ message: "Job description updated successfully!" });
    } else {
      // Create a new job description
      const newJobDescription = new JobDescription({ description: jobDescription });
      await newJobDescription.save();
      res.status(200).json({ message: "Job description saved successfully!" });
    }
  } catch (error) {
    console.error("Error saving/updating job description:", error);
    res.status(500).json({ message: "Failed to save or update job description." });
  }
});


app.post("/api/save-form-data", async (req, res) => {
  try {
    const { formId, ...formData } = req.body;

    // Check if there is existing form data with the same `formId`
    const existingFormData = await FormData.findOne({ formId });

    if (existingFormData) {
      // If form data exists, update it by setting new values including formId
      existingFormData.set({ formId, ...formData });
      await existingFormData.save();
      return res.status(200).json({ message: "Form data updated successfully!" });
    } else {
      // If no form data exists, create new form data
      const newFormData = new FormData({ formId, ...formData });
      await newFormData.save();
      return res.status(200).json({ message: "Form data saved successfully!" });
    }
  } catch (error) {
    console.error("Error saving/updating form data:", error.message, error.stack);
    return res.status(500).json({ message: "Failed to save or update form data." });
  }
});




app.get('/api/ats-analysis-results/analysis', async (req, res) => {
  try {
    const db = mongoose.connection;
    const collection = db.collection('ats_analysis_results');
    
    // Retrieve only the 'analysis' field from the most recent document
    const result = await collection
      .find({}, { projection: { analysis: 1, _id: 0 } })
      .sort({ _id: -1 }) // Sort by _id in descending order to get the most recent document
      .limit(1) // Limit to only one document (the most recent)
      .toArray();

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
