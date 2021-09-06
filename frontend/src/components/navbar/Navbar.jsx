import './navbar.scss'
import logo from './logo.png'
import {Search,Notifications,ArrowDropDown} from '@material-ui/icons'
import React ,{useState} from 'react'
import avatar from './mohamad.jpg'
const Navbar = () => {
  const [isScrolled,setIsScrolled]=useState(false)
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>(window.onscroll=null);
  }
  
  return (
    <div className={isScrolled?"navbar scrolled" : "navbar"}>
    <div className="container">
      <div className="left">
        <img src={logo} alt="" />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>

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
        <span>Logout</span>
      </div>
      </div>

      </div>

    </div>
    </div>
  )
}

export default Navbar
