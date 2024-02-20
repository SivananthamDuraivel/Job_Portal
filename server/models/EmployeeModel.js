const mongoose=require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const employeeDbModel=mongoose.model("employee_db",employeeSchema);

module.exports=employeeDbModel