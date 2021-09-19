import "./listItem.scss"
import cover from './movie.jpg'
import {PlayArrow,Add,ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons'
import {useState} from 'react'
import trailer from './movie2.mp4'
import {Link} from 'react-router-dom'


export default function ListItem({index,item}){
  const [isHovered,setIsHovered]=useState(false)
  return(
    <div className="listItem"
    style={{left: isHovered && index * 255 - 50 + index*2.5}}
     onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}>
    <img src={cover} alt="" />
    {isHovered && (
      <>
    <video src={trailer} autoPlay loop muted/>
    <div className="itemInfo">
        <div className='icons'>
          <Link to="/watch" className="link"><PlayArrow  className="icon"/></Link>
          <Add  className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Nulla eget gravida massa, id ornare nibh. Pellentesque aliquam accumsan nulla  </div>
    </div>
    <div className="genre">Action</div>
</>
    )}
    </div>
  )
}
