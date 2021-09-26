import './login.scss'
import logo from '../../components/navbar/logo.png'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Login({history}){

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')



  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/")
    }
  },[history])


  const loginHandler= async (e)=>{
    e.preventDefault()
    const config = {
      header:{
        "Content-Type":"application/json"
      }
    }


    try{
       const {data}= await axios.post("/api/auth/login",{email,password},config);
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
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <img src={logo} alt="" className="logo"/>
      </div>
      </div>
      <div className="container">
        <form onSubmit={loginHandler}>
          <h1>Sign In</h1>
          {error && <span className="error-message">{error}</span>}

          <input type ="email" placeholder="Email or phone number" value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>
          <input type ="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2}/>
          <button className="loginButton" tabIndex={3}>Sign In</button>
          <span>New to Netflix? <b> <Link to="/register" className="link">Sign up now</Link>.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>learn more</b>
          </small>

        </form>
      </div>
    </div>
  )
}
