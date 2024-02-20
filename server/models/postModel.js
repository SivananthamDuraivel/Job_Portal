const mongoose=require('mongoose')

const postSchema = new mongoose.Schema({
    jobtitle:String,
    companyname:String,
    desc:String,
    location:String,
    salary:String,
    contact:String,

})

const postDbModel=mongoose.model("post_db",postSchema);

module.exports=postDbModel