// const http = require('http');

const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    return res.send(" This is Express Home" + "Your Name is"+req.query.name+`My age is : ${req.query.age}`); // If working without return , then why write return  
    // res.end("This is end Parameter") ? Why error here ?
    // return res.send(`This is age ${req.query.age}`) // Error : Unreachable code detected, why?
});

app.get("/about",(req,res)=>{
    return res.send(" This is Express About Page");
})


// we also do not need to create server object, express does it for us
// const myServer = http.createServer(app);
// myServer.listen(8000,()=> console.log("Server Started!")); 

app.listen(8000,()=> console.log("Server Started Express!"))
