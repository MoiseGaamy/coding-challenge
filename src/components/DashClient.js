import React from 'react'
import '../css/dashboard.css'
import {AiOutlineUserAdd} from "react-icons/ai"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import Donhut from '../chart/Donhut.js'
import LineChart from '../chart/LineChart.js'

export default function DashClient() {
  return (
   <div className="row main-row2">
                  <div className="col-lg-6 custom-Total-col1 col-md-4 col-sm-6 custom-Total-chart">
                      <div className="daily-profit">
                          <div>Daily Active Client</div>
                          <div>
                                 <BiDotsHorizontalRounded size={ 20}/>
                          </div>
                      </div>
                       <hr className="line"/>
                      <div>
                          <LineChart color1='rgb(1, 100, 80)' color2='rgb(1, 100, 80)'/>
                     </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 custom-Total custom-Total-col1">
                 <div className="suitcase-container">
                         <div className="user-styling">
                             <AiOutlineUserAdd size={20} color="#fff" />
                         </div>
                         <div>
                             <h5>User onBoarding</h5>
                             <p className="total-sale">Q3:Goal:8,000users</p>
                         </div>
                     <div>
                              <BiDotsHorizontalRounded size={ 20}/>
                     </div>
                 </div>
                 <hr className="line"/>
                 <div>
                     <Donhut color1='rgb(250, 207, 85)' color2='rgb(234, 236, 238)' />
                 </div>
              </div>
</div>
  )
}
