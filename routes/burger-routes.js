const router = require('express').Router(),
	burgerController = require('../controllers/burgers_controller'); 

router
	.get('/', burgerController.getHome)
	.post('/', burgerController.postHome);

module.exports = router;