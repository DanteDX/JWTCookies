require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((result) =>{
        app.listen(4000,() =>{
            console.log('mongoose connected');
            console.log('Listening to port 4000');
        })
    })
    .catch(err => {
        console.log('Error');
    });