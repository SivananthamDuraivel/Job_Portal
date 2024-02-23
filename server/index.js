const express =require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const employeeDbModel=require('./models/EmployeeModel')
const postDbModel=require('./models/postModel')
const companyDbModel=require('./models/CompanyModel')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://210701250:JaN%4012345@mernapp.ne2gp9w.mongodb.net/?retryWrites=true&w=majority&appName=MERNAPP");

app.post('/post',(req,res)=>{
    postDbModel.create(req.body)
    .then(post=>res.json(post))
    .catch(err=>res.json(err))
})

app.post('/companyregister',(req,res)=>{
    companyDbModel.findOne({name:req.body.name})
    .then(user=>{
        console.log(user);
       if(user)
       {
            if(user.name===req.body.name)
            res.json("name already exists")
       }
       else
       {
            companyDbModel.create(req.body)
            .then(emp=>res.json(emp))
            .catch(err=>res.json(err))
            res.json("new user")

       }
    })
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

app.post('/companylogin',(req,res)=>{
    const {email,password}=req.body
    companyDbModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password===password)
                res.status(200).json({cname:user.name,"message":"success"})
            else
                res.json("wrong password")
        }
        else
        {
            res.json("no such records")
        }
    })
})

app.post('/findcompany',(req,res)=>{
    console.log("finding company");
    console.log(req.body.cname)
    postDbModel.find({companyname :req.body.cname})
    .then(company=>{
        if(company)
            res.json(company)
        else
            res.json("Not yet posted.")
    })
    .catch(err=>console.log(err));

})

app.post('/needall',(req,res)=>{
    postDbModel.find()
    .then(company=>{
        if(company)
            res.json(company)
        else
            res.json("No openings")
    })
    .catch(err=>console.log(err));

})

app.listen(5000,()=>{
    console.log("server running")
})

