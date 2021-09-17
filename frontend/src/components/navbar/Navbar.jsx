import './navbar.scss'
import logo from './logo.png'
import {Search,Notifications,ArrowDropDown} from '@material-ui/icons'
import React ,{useState} from 'react'
import avatar from './mohamad.jpg'
import {Link} from "react-router-dom"
const Navbar = ({history}) => {
  const [isScrolled,setIsScrolled]=useState(false)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/login")
  }

  return (
    <div className={isScrolled?"navbar scrolled" : "navbar"}>
    <div className="container">
      <div className="left">

        <Link to="/" className="link"> <img src={logo} alt="" /></Link>
        <Link to="/" className="link"><span>Homepage</span></Link>
        <Link to="/series" className="link"><span>Series</span></Link>
        <Link to="/movies"className="link"><span>Movies</span></Link>
        <Link to="/" className="link"><span>New and Popular</span></Link>
        <Link to="/"className="link"><span>My List</span></Link>








      </div>
      <div className="right">
      <Search className="icon"/>
      <span>KID</span>
      <Notifications className="icon"/>
      <img alt="" src={avatar}/>
      <div className="profile">
      <ArrowDropDown className="icon"/>
      <div className="options">
        <span>Settings</span>
        <span OnClick={logoutHandler}>Logout</span>
      </div>
      </div>

      </div>

    </div>
    </div>
  )
}

export default Navbar
