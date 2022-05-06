import React from 'react'
import '../css/dashboard.css'
import DashSale from './DashSale.js'
import DashProfit from './DashProfit.js'
import DashClient from './DashClient.js'

export default function Dashboard() {
  return (
   <div className="dashboard-container">
      <div className="fluid-container dashboard-custom-container">
       <DashSale />
       <DashProfit />
       <DashClient />
      </div>
      
    </div>
  )
  
}
