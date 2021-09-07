import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons"
import movie from '../../components/listitem/movie2.mp4'
import {Link} from 'react-router-dom'
export default function Watch(){
  return(
    <div className="watch">
    <div className="back">

      <ArrowBackOutlined />
      <Link to="/home" className="link">
      Home
      </Link>
    </div>


    <video src={movie} className="video" autoPlay progress controls/>
    </div>
  )
}
