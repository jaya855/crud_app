import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const Navigate=useNavigate()
  const handleAddUser=()=>{
    Navigate('/register')
  }
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
    <tr >
      <th scope="row">1</th>
      <td>meet</td>
      <td>meet@gmail.com</td>
      <td>webdeveloper</td>
      <td>1234567890</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i class="fas fa-eye"></i></button>
        <button className='btn btn-primary'><i class="fas fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fas fa-trash"></i></button>
      </td>
    </tr>
    
   
  </tbody>
</table>


</div>
   </div>
  )
}

export default Dashboard
