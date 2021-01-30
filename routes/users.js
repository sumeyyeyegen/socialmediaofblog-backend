const express = require('express');
const router = express.Router();




//Controllers
const userController = require('../controller/userController');

//Middlewares
const upload = require('../middleware/uploadImageMiddleware');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');
const adminAuthentication = require('../middleware/adminAuthorizationMiddleware');

/* Register User */
router.post('/register', upload.single('profilPicture'), userController.register);

/* Login User */
router.post('/login', userController.login);


router.post('/deneme',(req,res,next)=>{
	console.log(req.body);
})



//Follow
router.post('/follow', userController.follow);

//unFollow 
router.post('/unFollow',userController.unFollow);

//update user
router.put('/:user_id',authorizationMiddleware,userController.updateUserByUserId);

router.post('/banUser',adminAuthentication,userController.banUserByUserId);
router.post('/unBanUser',adminAuthentication,userController.unBanUserByUserId);
router.post('/userToAdmin',userController.userToAdmin);
router.post('/adminToUser',userController.adminToUser);



module.exports = router;
