const mongoose=require('mongoose')

const companySchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const companyDbModel=mongoose.model("company_db",companySchema);

module.exports=companyDbModel