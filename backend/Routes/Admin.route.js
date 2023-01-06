const { Router } = require("express");
const adminController = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminModel } = require("../Models/Admin.model");

adminController.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    const existing_user = await adminModel.findOne({ email });

    if (existing_user) {
        res.send("Admin already exist")
        return;
    }
    bcrypt.hash(password, 4, async function (err, hash) {
        if (err) {
            res.send({ "Message": "Signup failed. Please try again" });
        } else {

            const new_admin = new adminModel({
                email,
                password: hash,
                name,

            });

            await new_admin.save();
            res.send({ "Message": "Signup succesfull" });
        }
    });
});


//
adminController.post("/login", async (req, res) => {
    const { email, password } = req.body
    const admin = await adminModel.findOne({ email })
    if (admin) {
        const hashed_password = admin.password;
        const admin_id = admin._id;
        bcrypt.compare(password, hashed_password, function (err, result) {
            if (err) {
                res.send({ "Message": "Something went wrong, try again later" })
            }
            if (result) {
                const token = jwt.sign({ admin_id }, process.env.SECRET);
                res.send({ "Message": "Login successfull", token })
            }
            else {

                res.send({ "Message": "Login failed" })
            }
        });
    } else {
        res.send({ "Message": "Only admin can access" })
    }
})

module.exports = {
    adminController
}