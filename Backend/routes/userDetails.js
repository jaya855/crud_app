const express=require('express')
const router=express.Router();
const AddData=require('../controllers/AddData')
const GetAllData=require('../controllers/GetAllData')
const GetSpecificUser =require('../controllers/GetSpecificUser')

router.post('/register',AddData);
router.get('/getAllData',GetAllData);
router.get('/detail/:id',GetSpecificUser)
module.exports=router;

