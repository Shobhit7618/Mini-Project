//import express
const express=require('express');
const userRouter=require('./routers/userRouter');
const cors = require('cors');
//initialise express
const app=express();
const port=5000;

//middlewares

app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/user',userRouter);


//routes
app.get('/',(req,res)=>{
    res.send('response from express')
});

app.get('/home',(req,res)=>{
    res.send('response from home')
});
app.get('/add',(req,res)=>{
    res.send('response from Add')
});
app.get('/getall',(req,res)=>{
    res.send('response from Getall')
});
app.get('/getbyid',(req,res)=>{
    res.send('response from GetbyId')
});
app.get('/update',(req,res)=>{
    res.send('response from Update')
});
app.get('/delete',(req,res)=>{
    res.send('response from Delete')
});

//add,getall
app.listen(port,()=>{
    console.log('server started');
});
