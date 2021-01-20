const {Router} = require('express');
const router = Router();
const userControllers = require("../controllers/userControllers");

router.post('/createUser',userControllers.createUser);


module.exports = router;