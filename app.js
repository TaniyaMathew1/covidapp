const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controller/patientRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/covidDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/covid",patientRouter)

app.listen(3001,()=>{
    console.log("server running")
})