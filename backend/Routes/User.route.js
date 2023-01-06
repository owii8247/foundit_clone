const { Router } = require("express");
const {userModel}=require("../Models/User.model")
const userController = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

userController.post("/signup", async (req, res) => {
  const { email, password ,name,mobile,work_status} = req.body;
  const existing_user = await userModel.findOne({ email });

  if (existing_user) {
    res.send({"Message":"User already exist"})
    return;
  }
  bcrypt.hash(password, 4, async function (err, hash) {
    if (err) {
      res.send({"Message":"Signup failed ..please try again.."});
    } else {
      const new_user = new userModel({
        email,
        password: hash,
        name,
        mobile,
        work_status
      });

      await new_user.save();
      res.send({"Message":"Signup succesfull.."});
    }
  });
});


userController.post("/login", async (req, res) => {
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(user){

      const hashed_password = user.password;

      const user_id = user._id;


      bcrypt.compare(password, hashed_password, function(err, result) {
        if(err){
          res.send({"Message" : "Something went wrong, try again later"})
        }
        if(result){
          console.log(user)
          const token = jwt.sign({user_id}, process.env.SECRET);  
          const name=user.name;
          const email=user.email;
          const mobile=user.mobile;
          const id=user._id
           const document={
            name:name,
            email:email,
            mobile:mobile,
            id:id,
            token:token
           }
          res.send({"Message": "Login successfull",document:document})
        }
        else{
          res.send({"Message" : "Login failed"})
        }
      });
    }else{
      res.send({"Message":"User not found ..please login with correct credentials.."})
    }
})




module.exports = {
  userController,
};