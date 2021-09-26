import './login.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Topbar from '../../components/topbar/Topbar'
import Sidbar from '../../components/sidebar/Sidebar'


export default function Login({history}){

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      history.push("/admin")
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
       history.push("/admin")
    }catch(error){
      setError(error?.response?.data?.error)
        setTimeout(()=>{
          setError("")
        },5000)
    }
  }



  return(
    <>
    <Topbar/>
    <div className="admin-container">
    <Sidbar />
    <div className="admin-login">
      <h1 className="admin-loginTitle">Login</h1>
      <div className="admin-login-container">
      <form className="admin-loginForm" onSubmit={loginHandler}>
      {error && <span className="error-message">{error}</span>}

          <div className="admin-loginItem">
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)} tabIndex={1}/>
          </div>

          <div className="admin-loginItem">
            <label htmlFor="password">Password</label>
            <input type="password" required id="password" placeholder="Enter Password" value={password} onChange={(e) =>setPassword(e.target.value)} tabIndex={2}/>
          </div>





          <button className="admin-loginButton"  tabIndex={3} type="submit" >Login</button>

      </form>
      </div>
    </div>
    </div>
    </>
  )
}
