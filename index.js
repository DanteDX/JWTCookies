require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
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

app.use('/post',require('./routes/postRoutes'));
app.use('/comment',require('./routes/commentRoutes'));
app.use('/user',require("./routes/userRoutes"));
