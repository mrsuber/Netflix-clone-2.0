import './register.scss'
import logo from '../../components/navbar/logo.png'
import {useState,useRef} from 'react'
import { Link } from "react-router-dom";


export default function Register(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  const emailRef =useRef()
  const passwordRef =useRef()
  const confirmPasswordRef =useRef()

  const handleStart =()=>{
    setEmail(emailRef.current.value)
  }
  const handleAlmostDone =()=>{
    setPassword(passwordRef.current.value)
  }

  const handleFinish =()=>{
    setConfirmPassword(confirmPasswordRef.current.value)
    if(password!==confirmPassword){
      console.log("password dose not match")

    }
  }


  return(
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <img src={logo} alt="" className="logo"/>
        <button className="loginButton">Sign In</button>
      </div>
      </div>
      <div className="container">
        <h1>Unlimeted movies, Tv shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? enter your email to create or register your membership</p>
        {
          !email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={()=>handleStart()}>Get Started</button>
            </div>

          ): !password?( <form className="input">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton"onClick={()=>handleAlmostDone()}>Almost Done</button>
            </form>
          ): !confirmPassword &&(
            <form className="input">
                <input type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                <button className="registerButton"onClick={()=>handleFinish()} >Start</button>
              </form>
          )
        }

      </div>
    </div>
  )
}
