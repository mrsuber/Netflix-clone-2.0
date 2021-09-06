import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import cover from './cover.jpg'

const Home = () => {
  return (
    <div className="home">
    <Navbar/>
    <img src={cover} alt="" width="100%"/>


    </div>
  )
}

export default Home
