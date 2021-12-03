
const express=require("express")
const User=require('../models/users.model')
const router=express.Router();
const transporter=require("../configs/nodemailer")

const sendMail=require("../utils/send-mail")


///register api

router.post("/",async(req,res)=>{

    try{


     

        const users= await User.create(req.body)
     
        sendMail(
         "swarnikarajsingh@gmail.com",
         `${req.body.email}`,
         `Welcome to ABC system ${req.body.first_name}  ${req.body.last_name}`,
         `Hi ${req.body.first_name}, Please confirm your email address `,

         "<h1>Welcome to ABC system </h1>",
        )

         return res.status(201).json(users)
        }
 
      catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
       }

})


// get all users in paginated way

router.get("/",async(req,res)=>{

      try{
        const page=+req.query.page || 1;
        const size=+req.query.size || 2;

        const skip=(page-1)*size
        const users= await User.find().skip(skip).limit(size).lean().exec()
    totalPages= Math.ceil(await User.find().countDocuments()/size)

        return res.status(201).json({users,totalPages})
       }

     catch(e){
       return res.status(500).json({message:e.message,status:"Failed"})
      }

});






router.patch("/:id",async(req,res)=>{

  try{
      const users= await User.find(req.params.id,req.body,{new:true})
       return res.status(201).json(users)
      }

    catch(e){
      return res.status(500).json({message:e.message,status:"Failed"})
     }

})











module.exports=router;