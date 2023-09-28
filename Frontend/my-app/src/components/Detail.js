import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Detail=()=>{
    const [userData,setUserData]=useState([])
    const {uid}=useParams("");
    console.log("uid dhund rhe h")
    console.log(uid);
const getSpecificUser=async()=>{
    try{
        console.log("jaya qt")
        console.log(uid)
      const response = await axios.get(`http://localhost:4000/api/v1/userDetails/detail/${uid}`);
      setUserData(response.data.specificUser);
      console.log(response.data.specificUser);
    }
    catch(error){
      alert('not able to get data');
    
      console.log(error.response.data.message)
    }
}

useEffect(()=>{
    getSpecificUser();
},[])


    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 600 ,fontSize:30}}>Welcome Harsh Pathak</h1>

            <Card sx={{ maxWidth: 600 ,border:1,bgcolor:'grey',borderColor:'blue',boxShadow:5}}>
                <CardContent>
                    <div className="add_btn">
                        <button className="btn btn-primary mx-2 "><CreateIcon /></button>
                        <button className="btn btn-danger" ><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3 text-lg text-neutral-50">Name: <span >{userData.name}</span></h3>
                            <h3 className="mt-3 text-lg text-neutral-50">Age: <span >{userData.age}</span></h3>
                            <p className="mt-3 text-lg text-neutral-50"><MailOutlineIcon />Email: <span>{userData.email}</span></p>
                            <p className="mt-3 text-lg text-neutral-50"><WorkIcon />Occuption: <span>{userData.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5 text-lg text-neutral-50"><PhoneAndroidIcon />mobile: <span>{userData.mobile}</span></p>
                            <p className="mt-3 text-lg text-neutral-50"><LocationOnIcon />location: <span>{userData.add}</span></p>
                            <p className="mt-3 text-lg text-neutral-50">Description: <span>{userData.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Detail

