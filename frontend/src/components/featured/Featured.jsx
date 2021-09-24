import './featured.scss'
import cover from './cover.jpg'
import cover2 from './Shang2.png'
import {PlayArrow,InfoOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Featured({type}){
  const [content,setContent]=useState(null)
  console.log(content)
  function checktype(){
     if(type){
       return"?type="+type
     }else return ""
  }

  useEffect(()=>{
    const config = {
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${localStorage.getItem("authToken")}`
      }
    }
    const getRandomContent = async ()=>{
      try{
        const res = await axios.get("/api/private/getrandommovies"+checktype(),config)
        setContent(res.data)
      }catch(error){console.log(error)}
    }
    getRandomContent()

  },[type])

    if(content===null)return ("Loading...")
  return(
    <div className="featured">
    {type && (

      <div className="category">
        <span>{type==="movie"? "Movies":"Series"}</span>
        <select name="genre" id="genre">
          <option value="genre">Genre</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
    )}
        <img src={content?.data[0]?.img} alt="" />
        <div className="info">
          <img src={content?.data[0]?.imgTitle} alt="" />
          <span className="desc">{content?.data[0]?.desc}</span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span><Link to="/stream" className="link">Play</Link> </span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
    </div>
  )
}
