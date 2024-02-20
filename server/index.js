const express =require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const employeeDbModel=require('./models/EmployeeModel')
const postDbModel=require('./models/postModel')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/post',(req,res)=>{
    postDbModel.create(req.body)
    .then(post=>res.json(post))
    .catch(err=>res.json(err))
})

app.post('/register',(req,res)=>{
    employeeDbModel.findOne({name:req.body.name})
    .then(user=>{
       if(user)
       {
            if(user.name===req.body.name)
            res.json("name already exists")
       }
       else
       {
            employeeDbModel.create(req.body)
            .then(emp=>res.json(emp))
            .catch(err=>res.json(err))

       }
    })
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    employeeDbModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password===password)
                res.status(200).json({id:user._id,"message":"success"})
            else
                res.json("wrong password")
        }
        else
        {
            res.json("no such records")
        }
    })
})

app.listen(3000,()=>{
    console.log("server running")
})

