import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// import { adddata } from './context/ContextProvider';

const Register = () => {

    // const { udata, setUdata } = useContext(adddata);

    // const history = useHistory();
     const Navigate=useNavigate();
    const [formData, setFormData] = useState({name: "",email: "",age: "",mobile: "",work: "",add: "",desc: ""})


    const changeHandler = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault();

       
      try{
        console.log(formData)
        const { name, email, age,mobile,work, add, desc } = formData;
      const response = await axios.post('http://localhost:4000/api/v1/userDetails/register',formData);
      alert("data added successfully");
      console.log("data added successfully");
      Navigate('/')
      }
      catch(error){
        alert("data not added");
        console.log(error);
        console.log("data not added");
      }
       
    }

    return (
        <div className="container">
           
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={formData.name} onChange={changeHandler} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" value={formData.email} onChange={changeHandler} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">age</label>
                        <input type="text" value={formData.age} onChange={changeHandler} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" value={formData.mobile} onChange={changeHandler} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={formData.work} onChange={changeHandler} name="work" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={formData.add} onChange={changeHandler} name="add" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={formData.desc} onChange={changeHandler} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={submitHandler} className="btn btn-primary bg-slate-800 text-lg  text-zinc-950">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;