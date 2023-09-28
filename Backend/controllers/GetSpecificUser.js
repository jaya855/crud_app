const userDetails=require('../models/userDetails')
const GetSpecificUser=async(req,res)=>{
 try{
  const {id}=req.params;
  console.log({id})
  const userfounded = await userDetails.findById({_id:id});
  res.status(200).json({
    success:true,
    message:"user fetched successfully",
    specificUser:userfounded
  })
 }
 catch(error){
    res.status(500).json({
        success:false,
        message:"user not fetched",
      })
 }
}

module.exports=GetSpecificUser;