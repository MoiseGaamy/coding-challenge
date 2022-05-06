import React from 'react'
import { BiMenuAltLeft,BiSearch } from 'react-icons/bi';


export default function Header() {
  return (
   <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mynav ml-auto">
      <form className="form-inline form-style my-2 my-lg-0">
        <div className="input-group mb-2 mr-sm-2">
          <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Add More"/>
          <div className="input-group-prepend">
            <div className="input-group-text custom-input-group-text2">
             <BiSearch color='#fff'/>
            </div>
          </div>
        </div>
    </form>
        <li className="nav-item custom-item">
          <a className="nav-link" href="#">Udwell Now</a>
        </li>
        <li className="nav-item custom-item">
          <a className="nav-link disabled">Sale a Property</a>
        </li>
        <li className="nav-item custom-item">
           <BiMenuAltLeft size={30} />
        </li>
    </ul>
   
  </div>
</nav>
  )
}
