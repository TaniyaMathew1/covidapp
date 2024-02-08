const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema(
    {
        patientName:String,
        patientAddress:String,
        patientPhone:String,
        patientSymptom:String,
        patientStatus:String
    }
)
module.exports=mongoose.model("patient",patientSchema)