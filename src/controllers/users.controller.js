
const express=require("express")
const User=require('../models/users.model')
const router=express.Router();





router.post("/",async(req,res)=>{

    try{
        const users= await User.create(req.body)
         return res.status(201).json(users)
        }
 
      catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
       }

})




router.get("/",async(req,res)=>{

      try{
       const users= await User.find().lean().exec()
        return res.send(users)
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