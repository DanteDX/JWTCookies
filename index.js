require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(express.static('public'));
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

app.use('/post',require('./routes/postRoutes'));
app.use('/comment',require('./routes/commentRoutes'));
