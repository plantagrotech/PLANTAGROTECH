    const express= require('express');
    const cors = require("cors");
    const app= express();
    var corsOptions = {
        origin: "http://localhost:8081"
    };
    app.use(cors(corsOptions));
    app.use(express.json());

    // app.get('/api/get',(req,res)=>{
    //     res.send({message:'nodejs aws deployement'})
    // })
    // app.get('/api/get/users',(req,res)=>{
    //     res.send({name:'Dev',email:'test@gmail.com','role':'developer'})
    // })
    // simple route
    app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Plant Agro tech application." });
    });
    const router = require('./app/routes/router');
    app.use('/', router);
    const PORT = 8080;
    app.listen(PORT,(req,res)=>{
        console.log('server running on pot 8080')
    })