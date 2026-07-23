import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,SetCurrState] = useState("Login")
  return (
    <div className='login-popup'>
         <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
                <input type='email' placeholder='Your Email' required/>
                <input type='password' placeholder='Enter your password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & Privacy Policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>SetCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have a account? <span onClick={()=>SetCurrState("Login")}>Login</span></p>
            } 
            
            
            
         </form>
    </div>
  )
}

export default LoginPopup