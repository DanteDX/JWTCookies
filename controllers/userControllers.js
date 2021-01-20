const User = require("../models/User");

const createUser = async (req,res) =>{
    const {email,password} = req.body;
    try{
        let user = await User.create({email,password});
        res.status(200).json(user);
    }catch(err){
        console.log('Error in new user creation');
        res.status(400).json(err);
    }
}

module.exports = {
    createUser
};