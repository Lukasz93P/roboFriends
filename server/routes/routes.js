const express =require ('express');
const router=express.Router();
const {signin,modify,register,removeContact} =require('../controllers/users');

router.post('/login',signin)

router.post('/register',register)

router.post('/modify',modify)

router.put('/removecontact',removeContact)


module.exports=router;