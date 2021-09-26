import './featuredInfo.css'
import {ArrowDownward,ArrowUpward} from "@material-ui/icons"

export default function featuredInfo(){
  return(
    <div className="admin-featured">
        <div className="admin-featuredItem">
          <span className="admin-featuredTitle">Revanue</span>
          <div className="admin-featuredMoneyContainer">
            <span className="admin-featuredMoney">$2,415</span>
            <span className="admin-featuredMoneyRate">
            -11.5 <ArrowDownward className="admin-featuredIcon negative"/>
            </span>
            </div>
            <span className="admin-featuredSub">
              Compared to last month
            </span>


        </div>


        <div className="admin-featuredItem">
          <span className="admin-featuredTitle">Sales</span>
          <div className="admin-featuredMoneyContainer">
            <span className="admin-featuredMoney">$4,415</span>
            <span className="admin-featuredMoneyRate">
            -1.5 <ArrowDownward className="admin-featuredIcon negative"/>
            </span>
            </div>
            <span className="admin-featuredSub">
              Compared to last month
            </span>


        </div>


        <div className="admin-featuredItem">
          <span className="admin-featuredTitle">Cost</span>
          <div className="admin-featuredMoneyContainer">
            <span className="admin-featuredMoney">$2,255</span>
            <span className="admin-featuredMoneyRate">
            +2.5 <ArrowUpward className="admin-featuredIcon "/>
            </span>
            </div>
            <span className="admin-featuredSub">
              Compared to last month
            </span>


        </div>
    </div>
  )
}
