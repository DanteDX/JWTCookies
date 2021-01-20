const mongoose = require('mongoose');
const {isEmail} = require('validator');
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true,'Please enter an email'],
		lowercase: true,
		unique: true,
		validate: [isEmail,'Please enter a valid email']
	},
	password: {
		type: String,
		required: [true,'Please enter a password'],
		minLength: [3,'Password should be minimum 3 characters long'],
	},
});

const User = mongoose.model('user', userSchema);
module.exports = User;
