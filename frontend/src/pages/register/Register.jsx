import './register.scss'
import logo from '../../components/navbar/logo.png'
import {useState,useRef,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'


export default function Register({history}){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const [error,setError]=useState('')
  const emailRef =useRef()
  const passwordRef =useRef()


  const handleStart =()=>{
    setEmail(emailRef.current.value)
    setUsername(emailRef.current.value)
      console.log("password",password,"email",email,"username",username)
  }

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/")
    }
  },[history])

  const registerHandler= async (e)=>{
    setPassword(passwordRef.current.value)
    e.preventDefault()
    console.log("password",password,"email",email,"username",username)
    const config = {
      header:{
        "Content-Type":"application/json"
      }
    }


    try{
       const {data}= await axios.post("/api/auth/register",{username,email,password},config);
       localStorage.setItem("authToken",data.token)
       history.push("/")
    }catch(error){
      setError(error.response.data.error)
        setTimeout(()=>{
          setError("")
        },5000)
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
        <span className="register-screen_subtext">Already have an account? <Link to="/login" className="link">Login</Link></span>
        {error && <span className="error-message">{error}</span>}
        {

          !email ? (
            <div className="input">

              <input type="email" required placeholder="email address"  onChange={(e) =>setEmail(e.target.value)} />
              <button className="registerButton" onClick={()=>handleStart()}>Get Started</button>
            </div>

          ):( <form className="input">
              <input type="password" required placeholder="password"  onChange={(e) =>setPassword(e.target.value)} />
              <button className="registerButton"onClick={()=>registerHandler()}>Start</button>
            </form>
          )
        }


      </div>
    </div>
  )
}
