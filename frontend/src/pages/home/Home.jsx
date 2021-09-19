import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from "../../components/featured/Featured"
import List from '../../components/list/List'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Home = ({history,type}) => {
  const [error,setError] =useState("")
  const [lists,setLists]=useState([])
  const [genre,setGenre]=useState(null)
  const [movieList,setMovieList]=useState([])
  const [seriesList,setSeriesList]=useState([])
console.log(lists)
  function checktype(){
     if(type){
       if(genre){
         return "?type="+type+"&&genre="+genre
       }

       return"?type="+type
     }else return ""
  }
  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        // const {data} = await axios.get("/api/private",config)
        const getallList = await axios.get("/api/private/getalllists"+checktype(),config)
        // const getallList = await axios.get(`/api/private/getalllists${type?"?type="+type:""}${genre ? "&genre="+genre:""}`,config)
        setLists(getallList.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history,type,genre])

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/login")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>


      <div className="home">

      <Navbar logoutHandler={logoutHandler}/>

      <Featured type={type}/>
      {lists.map((list)=>(
        <List list={list}/>
      ))}



      </div>
    </>


  )
}

export default Home
