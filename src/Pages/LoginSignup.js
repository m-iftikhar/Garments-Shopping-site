<<<<<<< HEAD
import React from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1> Sign Up</h1>
        <div className='fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Id'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button > Continue</button>
        <p className='login-part'> 
        Already have an account <span>Login Here</span>
        </p>
=======
import React, { useState } from 'react'
import './LoginSignup.css'
import { json } from 'react-router-dom'
import { SiJameson } from 'react-icons/si'
const LoginSignup = () => {
  const [state, setstate]=useState("login")
  const [formData,setFormdata]=useState({
    username:"",
    password:"",
    email:""
  })
  const changehandler=(e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
  }
  const login = async()=>{
    console.log("login execute", formData)
    let responsedata;
    await fetch("http://localhost:4000/login",{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responsedata=data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace('/');
    }
    else{
      alert(responsedata.errors || "NOT registered")
    }
  }
  
  const signup = async()=>{
    console.log("signup execute",formData) 
    let responsedata;
    await fetch("http://localhost:4000/signup",{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responsedata=data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace('/');
    }
    else{
      alert(responsedata.errors || "already registered")
    }
  }


  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='fields'>
         {state=="signup" ? <input name='username' value={formData.username} onChange={changehandler} type='text' placeholder='Your Name'/>:<></>} 
          <input name='email' value={formData.email} onChange={changehandler} type='email' placeholder='Email Id'/>
          <input name='password' value={formData.password} onChange={changehandler} type='password' placeholder='Password'/>
        </div>
        <button onClick={state=="signup" ? signup : login} > Continue</button>
        {state=="signup"? <p  className='login-part'> 
        Already have an account <span onClick={()=>setstate("login")}L>  Login Here</span>
        </p>:<p className='login-part'> 
        Create an account <span onClick={()=>setstate("signup")}>  Click Here</span>
        </p> }
       
        
>>>>>>> 4ed2e08 (add admin folder and backend folder)
        <div className='agree'>
           <input type='checkbox' name='' id=''/>  
           <p>By Continuing , I agree to the term of use</p>
        </div>


         
      </div>

    </div>
  )
}

export default LoginSignup