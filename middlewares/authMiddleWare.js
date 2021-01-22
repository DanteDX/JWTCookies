const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const authMiddleWare = (req,res,next) =>{
	const token = req.cookies.jwtToken;

	if(!token){
		res.status(400).send('No Token provided');
	}
	if(token){
		jwt.verify(token,process.env.jwtSecret,(err,decodedToken) =>{
			if(err){
				res.status(400).send('Token could not be verfied');
			}
			req.decodedToken = decodedToken;
			console.log(decodedToken);
			next();;
		})
	}
}

module.exports = authMiddleWare;