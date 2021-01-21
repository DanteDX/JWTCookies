const User = require("../models/User");

const handleErrors = err =>{
    let errorMessages = {email:'',password:''};
    //email duplicate error
    if(err["code"] === 11000){
        errorMessages.email = "That email already exists";
        return errorMessages;
    }
    // validation errors
    let errorObjects = err.errors;
    errorMessages.email = errorObjects.email.message;
    errorMessages.password = errorObjects.password.message;
    return errorMessages;
}

const createUser = async (req,res) =>{
    const {email,password} = req.body;
    try{
        let user = await User.create({email,password});
        res.status(200).json(user);
    }catch(err){
        // const errors = handleErrors(err);
        console.log(err);
        res.status(400).json({err});
    }
}

module.exports = {
    createUser
};