const auth = require('../middleware/authentcation/auth');
const { addNew,getAll,userNews ,update} = require('../service/news.service');

const Router=require('express').Router();
Router.post('/add',auth,addNew);
Router.get('/allnews',auth,getAll);
Router.get('/userNews',auth,userNews);
Router.put('/update',auth,update)
module.exports=Router;
