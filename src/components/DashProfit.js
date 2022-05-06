import React from 'react'
import '../css/dashboard.css'
import {RiSuitcase2Line} from "react-icons/ri"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import LineChart from '../chart/LineChart.js'
import Donhut from '../chart/Donhut.js'

export default function DashProfit() {
  return (
   <div className="row main-row2">
              <div className="col-lg-3 col-md-4 col-sm-6 custom-Total custom-Total-col1">
                 <div className="suitcase-container">
                         <div className="suitcase-styling">
                             <RiSuitcase2Line size={20} color="#fff" />
                         </div>
                         <div>
                             <h5>Total Sales</h5>
                             <p className="total-sale">+$985.56</p>
                         </div>
                     <div>
                              <BiDotsHorizontalRounded size={ 20}/>
                     </div>
                 </div>
                 <hr className="line"/>
                 <div>
                     <Donhut color1='rgb(1, 100, 80)' color2='rgb(234, 236, 238)' />
                 </div>
              </div>
                  <div className="col-lg-6 custom-Total-col1 col-md-4 col-sm-6 custom-Total-chart">
                      <div className="daily-profit">
                          <div>Daily Profit</div>
                          <div>
                                 <BiDotsHorizontalRounded size={ 20}/>
                          </div>
                      </div>
                       <hr className="line"/>
                      <div>
                          <LineChart color1='rgb(255, 132, 51)' color2='rgb(255, 132, 51)'/>
                     </div>
              </div>
          </div>
  )
}
