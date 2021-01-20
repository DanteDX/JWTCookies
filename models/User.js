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

// this function is fired after saving user to the database, post-save
userSchema.post('save',function(doc,next){
	console.log('New user was created',doc);
	next();
})
// this function is fired before saving user to the database, pre-save
userSchema.pre('save',function(next){
	console.log('The user is about to be created and saved',this);
	next();
})
/* the plan is to hash the password with bcryptJS before
saving the password to the database */

const User = mongoose.model('user', userSchema);
module.exports = User;
