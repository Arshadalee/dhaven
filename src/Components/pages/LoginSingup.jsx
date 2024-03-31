import React from 'react'
import "./css/login.css";


const LoginSingup = () => {
  return (
    <div className='container loginsignup'>
    <div className='loginsignup-container'>
      <h1>
        Sign Up
      </h1>
      <div className='loginsingup-fields'>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Enter Password'/>
      </div>
      <center><button>Continue</button></center>
      <p className='loginsignup-login'>Already have an account?<span>
        Login here
      </span></p>

    <div className='loginsignup-agree'>
      <input type="checkbox" name="" id=""/>
       . By Continuing ,i agree to the terms of use & privacy policy.
    </div>

    </div>
      
    </div>
  )
}

export default LoginSingup
