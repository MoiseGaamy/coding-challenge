import React from 'react'
import Profile from './Profile.js'
import Dashboard from './Dashboard.js'

export default function Main() {
  return (
    <div className="fluid-container main-container">
        <div className="row">
          <div className="col-lg-3 col-md-8 col-sm-6 custom-profile">
              <Profile />
          </div>  
          <div className="col-lg-8 col-md-11 col-sm-6 custom-dashboard">
              <Dashboard />
          </div>  
        </div>
    </div>
  )
}
