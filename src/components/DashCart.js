import React from 'react'
export default function DashCart({name,goal,percentage,secondPercent,year,color,barColor}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 custom-Sales-container">
                  <div className="sale-inner-container">
                      <h6>{name}</h6>
                      <p>{goal}</p>
                  </div>
                  <div className="sale-inner-container">
                      <h4>{percentage}</h4>
                      <p style={{color:color}}>{secondPercent}</p>
                  </div>
                  <div>
                      <div className="progress custom-progress">
                          <div class={`${barColor === 'green'?'progress-bar bg-success custom-bg-success':'progress-bar bg-success custom-bg-yellow'}`} role="progressbar" style={ {width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p>{year}</p>
                  </div>
              </div>
  )
}
