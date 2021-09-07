import './featured.scss'
import cover from './cover.jpg'
import cover2 from './Shang2.png'
import {PlayArrow,InfoOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function Featured({type}){
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
        <img src={cover} alt="" />
        <div className="info">
          <img src={cover2} alt="" />
          <span className="desc">Nulla eget gravida massa, id ornare nibh. Pellentesque aliquam accumsan nulla sit amet venenatis. Maecenas ligula ante, viverra et lectus at, posuere pretium odio. Sed urna metus, pretium eget tellus vitae, scelerisque rutrum odio. Aenean ante ipsum, rhoncus nec mauris a, finibus dignissim libero.</span>
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
