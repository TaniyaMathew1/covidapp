const express=require("express")
const patientModel = require("../model/patientModel")
const router=express.Router()


router.post("/patient-entry",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})
module.exports=router