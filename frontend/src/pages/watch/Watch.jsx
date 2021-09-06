import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons"
import movie from '../../components/listitem/movie2.mp4'

export default function Watch(){
  return(
    <div className="watch">
    <div className="back">
      <ArrowBackOutlined />
      Home
    </div>
    <video src={movie} className="video" autoPlay progress controls/>
    </div>
  )
}
