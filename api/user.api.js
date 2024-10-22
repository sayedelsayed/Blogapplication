const { userValidattion } = require('../middleware/validation/user.vali');
const { signup,signin } = require('../service/user.service');

const Router=require('express').Router();
Router.post('/signup/:id',userValidattion,signup);
Router.post('/signin',signin)
module.exports=Router;
