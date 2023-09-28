import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Dashboard = () => {
  const Navigate=useNavigate()
  const handleAddUser=()=>{
    Navigate('/register')
  }
  const [allData,setAllData]=useState([]);
  const getAllData=async()=>{
  try{
    const response= await axios.get('http://localhost:4000/api/v1/userDetails/getAllData');
  console.log("hello jaya");
  console.log(response.data.allUsers);
  // alert('response.data.allUsers')
    setAllData(response.data.allUsers);
  }
  catch(error){
    alert('error while fetching');
    console.log("error while fetching")
  }
  }

  useEffect(()=>{
     getAllData()
  },[])

 
  return (
   <div className='mt-5'>
<div className='container'>
 <div className='add_btn mt-2 mb-2'>
   <button className='btn btn-primary' onClick={handleAddUser}>Add data</button>
 </div>

 <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
{

allData.map((element,i)=>{
  return (
    <tr >
    <th scope="row">{i+1}</th>
    <td>{element.name}</td>
    <td>{element.email}</td>
    <td>{element.work}</td>
    <td>{element.mobile}</td>
    <td className='d-flex justify-content-between'>
      <NavLink to={`/detail/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon/></button></NavLink>
      <button className='btn btn-primary'><CreateIcon/></button>
      <button className='btn btn-danger'><DeleteOutlineIcon/></button>
    </td>
  </tr>

  )
})
}
 </tbody>

</table>
</div>
   </div>
  )
}

export default Dashboard
