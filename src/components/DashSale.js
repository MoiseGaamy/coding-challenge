import React from 'react'
import '../css/dashboard.css'
import DashCart from './DashCart.js'

export default function DashSale() {
  return (
      <div className="row main-row">
          <DashCart name='Sales'
              goal='Monthly Goal'
              percentage='98.1%'
              secondPercent='+6.9%'
              year='Yearly Goal'
              color='#016450' 
              barColor='green'/>
          
          <DashCart name='Revenu'
              goal='Total Profit'
              percentage='$13,893'
              secondPercent='+11.3%'
              year='Yearly Goal'
              color='#ff8433'
              barColor='yellow' />
          
          <DashCart name='Clients'
              goal='Subscribed'
              percentage='$1,232'
              secondPercent='+3.9%'
              year='Yearly Goal' 
              color='#016450'
              barColor='green'/>
          
          </div>
  )
}
