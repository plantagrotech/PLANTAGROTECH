    const express= require('express');
    const app= express();
    app.get('/api/get',(req,res)=>{
        res.send({message:'nodejs aws deployement'})
    })
    app.get('/api/get/users',(req,res)=>{
        res.send({name:'Dev',email:'test@gmail.com','role':'developer'})
    })
    app.listen(9000,(req,res)=>{
        console.log('server running on pot 9000')
    })