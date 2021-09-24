import "./listItem.scss"
import {PlayArrow,Add,ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function ListItem({index,item,history}){

  const [isHovered,setIsHovered]=useState(false)
  const [movies,setMovies]=useState({})

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const getMovies= async ()=>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }

      try{
        const res = await axios.get('/api/private/getamovie/'+item,config)
        setMovies(res.data)
      }catch(error){console.log(error)}
    }
    getMovies()
  },[item])

  function truncate(str,n){
    return str?.length>n? str.substr(0,n-1) + "...": str;
  }
  return(

    <div className="listItem" style={{left: isHovered && index * 255 - 50 + index*2.5}}  onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
    <img src={movies?.data?.img} alt="" />
    {isHovered && (
      <>
    <Link to={{pathname:"/watch",movie:movies}} className="link"><video src={movies?.data?.trailer} autoPlay loop muted/></Link>
    <div className="itemInfo">
        <div className='icons'>
          <Link to={{pathname:"/watch",movie:movies}} className="link"><PlayArrow  className="icon"/></Link>
          <Add  className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>{movies?.data?.duration}</span>
          <span className="limit">+{movies?.data?.limit}</span>
          <span>{movies?.data?.year}</span>
        </div>
        <div className="desc">{truncate(movies?.data?.desc,100)}  </div>
    </div>
    <div className="genre">{movies?.data?.genre}</div>
</>
    )}
    </div>
  )
}
