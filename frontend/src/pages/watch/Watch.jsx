import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons"
// import movie from '../../components/listitem/movie2.mp4'
import {Link} from 'react-router-dom'
import {useLocation} from "react-router-dom"


export default function Watch(){
  const location = useLocation()
const movie =location.movie.data.video
  return(
    <div className="watch">
    <div className="back">

      <ArrowBackOutlined />
      <Link to="/" className="link">
      Home
      </Link>
    </div>


    <video src={movie} className="video" autoPlay progress controls/>
    </div>
  )
}
