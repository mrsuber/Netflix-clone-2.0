import './home.css'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Topbar from '../../components/topbar/Topbar'
import Sidbar from '../../components/sidebar/Sidebar'
import {userData} from '../../dummyData'

export default function Home(){

  return(
    <>
    <Topbar/>
    <div className="admin-container">
    <Sidbar />
    <div className="admin-home">
    <FeaturedInfo />
    <Chart
    data={userData}
    title="User Analytics"
    grid
    dataKey="Active User"
    />
    <div className="admin-homeWidgets">
      <WidgetSm />
      <WidgetLg />
    </div>
    </div>
    </div>
    </>
  )
}
