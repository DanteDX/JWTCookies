const {Router} = require('express');
const router = Router();
const commentControllers = require('../controllers/commentController');

router.get('/addComment',commentControllers.addComment);

router.get('/deleteComment',commentControllers.deleteComment);

router.get('/updateComment',commentControllers.updateComment);

module.exports = router;