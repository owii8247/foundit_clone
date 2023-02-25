const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    "id": { type: String, required: true },
    "image": { type: String, required: true },
    "job_title": { type: String, required: true },
    "salary": { type: String, required: true },
    "category": { type: String, required: true },
    "company_name": { type: String, required: true },
    "city": { type: String, required: true },
    "state": { type: String, required: true },
    "country": { type: String, required: true },
    "viewed": { type: String, required: true },
    "applied": { type: String, required: true },
    "experience": { type: String, required: true },
    "job_description": { type: String, required: true },
    "job_type": { type: String, required: true },
    "industry": { type: String, required: true },
    "functions": { type: String, required: true },
    "roles": { type: String, required: true },
    "skills": { type: String, required: true },
    "education": { type: String, required: true },
    "post_date": { type: String, required: true },
    "company_description": { type: String, required: true },
    "is_remote": { type: String, required:true},
    "has_expired": { type: String, required: true },
})

const jobModel = mongoose.model("job", jobSchema)

module.exports = {
    jobModel
}