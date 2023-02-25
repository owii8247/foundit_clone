const { Router } = require("express")
const { jobModel } = require("../Models/Job.model")
const jobController = Router()

// GET ALL JOBS
jobController.get("/", async (req, res) => {
    console.log(req.query)
    const query = req.query

    const job = await jobModel.find(query)

    res.send(job)

})

// GET JOB BY ID
jobController.get("/:id", async (req, res) => {
    const id = req.params.id
    try {

        const job = await jobModel.findOne({ _id: id })

        res.send(job)
    }
    catch (err) {
        console.log(err)
    }

})

// CREATE JOB 
jobController.post("/create", async (req, res) => {
    // const id = req.body
    // console.log(id)
    const { id,image, job_title,salary, category, 
        company_name, city, state, country,
        viewed, applied,  job_description,
        job_type, industry, functions,
        roles, skills, education,
        post_date,experience,
        is_remote, has_expired,
        company_description
    } = req.body

    const new_job = new jobModel({
        id,
        image, job_title,salary, category, 
        company_name, city, state, country,
        viewed, applied,  job_description,
        job_type, industry, functions,
        roles, skills, education,
        post_date,experience,
        is_remote, has_expired,
        company_description
    })

    await new_job.save()
    res.send({ "Message": "Job Posted Successfully", new_job })
})

// DELETE JOB BY ID
jobController.delete("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        await jobModel.deleteOne({ _id: id })
        res.send({ "Message": "Job deleted successfully" })
    }
    catch (err) {
        console.log(err)
    }
})

// PATCH JOB BY ID
jobController.patch("/:id",async(req, res)=>{
    try{
      const  _id=req.params.id
    const updatdata = await jobModel.findByIdAndUpdate(_id,req.body,{new:true});
    res.send(updatdata)
    }catch(err){
      res.status(400).send(e.message);
    }
  });

module.exports = { jobController }