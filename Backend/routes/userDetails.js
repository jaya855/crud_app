const express=require('express')
const router=express.Router();
const AddData=require('../controllers/AddData')

router.post('/register',AddData);

module.exports=router;