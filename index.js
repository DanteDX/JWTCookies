require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
app.set('view engine', 'ejs');


mongoose.connect(process.env.MONGODB_URI,{ 
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true 
}).then((result) =>{
        app.listen(4000,() =>{
            console.log('mongoose connected');
            console.log('Listening to port 4000');
        })
    })
    .catch(err => {
        console.log('Error');
    });

app.get('/',(req,res)=>{
    res.send('Welcome to the home page');
})

app.get('/setCookies',(req,res) =>{
    // res.setHeader('Set-Cookie','newUser=true');
    res.cookie('newUser',true,{maxAge:1000*40, httpOnly:true});
    res.cookie('userInfo',{name:'Shadman',gender:'male'},{httpOnly:true});
    res.send('You have set the cookies');
});

app.get('/getCookies',(req,res)=>{
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
});

app.get('/register/:email/:password',(req,res)=>{
    if(!req.params.email){
        res.send('Email is required');
    }else if(!req.params.password){
        res.send('Password is required');
    }
    const email = req.params.email;
    const password = req.params.password;
    const payload = {email,password};
    const jwtToken = jwt.sign(payload,process.env.jwtSecret,{
        expiresIn:70
    });
    res.cookie('jwtToken',jwtToken,{maxAge:70*1000});
    res.json({jwtToken});
});

app.get("/clearCookir",function(req,res){
    res.clearCookie('jwtToken');
    res.json({cookies:req.cookies});
});

app.get('/query',(req,res)=>{
    if(!req.query.email){
        res.send('Email is required');
    }else if(!req.query.password){
        res.send('Password is required');
    }
    const email = req.query.email;
    const password = req.query.password;
    const payload = {email,password};
    const jwtToken = jwt.sign(payload,process.env.jwtSecret,{
        expiresIn:70
    });
    res.cookie('jwtToken',jwtToken,{maxAge:70*1000});
    res.json({jwtToken,payload});
});

app.use('/post',require('./routes/postRoutes'));
app.use('/comment',require('./routes/commentRoutes'));
app.use('/user',require("./routes/userRoutes"));
