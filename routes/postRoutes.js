const {Router} = require('express');
const router = Router();
const postControllers = require('../controllers/postControllers');

router.get('/addPost',postControllers.addPost);

router.get('/deletePost',postControllers.deletePost);

router.get('/updatePost',postControllers.updatePost);

module.exports = router;