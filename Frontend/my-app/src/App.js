import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [login,setLogin]=useState(localStorage.getItem("userLogged"));
  console.log("app")
  console.log("login->"+login)
  console.log(typeof(login))
    //    useEffect(()=>{
    //   const userLogged = localStorage.getItem("userLogged") ;
    // console.log("userLogged->"+userLogged)
    //   setLogin(userLogged)
    //    },[])
  console.log("Applogin->"+login)
  return (
    <div className="App myApp">
      <MyNavbar  />
    
      <Routes>
        {/* my routes */}
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
