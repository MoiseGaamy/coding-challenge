import React from 'react'
import {RiFacebookFill} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import '../css/footer.css'

export default function Footer() {
  return (
   <div className="container">
       <div className="row">
           <div className="col-lg-3 col-md-4 col-sm-6"></div>
           <div className="col-lg-3 col-md-4 col-sm-6">
                <h3 className="custom-heading">About</h3>
           </div>
           <div className="col-lg-3 col-md-4 col-sm-6">
                <h3 className="custom-heading">Support</h3>
           </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <h3 className="custom-heading">Address</h3>
           </div>
       </div>
       <div className="row">
           <div className="col-lg-3 col-md-4 col-sm-6">
               <p>Counter Delivery,Carters Beach</p>
               <p>PostCentre,Westport</p>
           </div>
           <div className="col-lg-3 col-md-4 col-sm-6">
                 <ul className="d-flex flex-column footer-link bd-highlight">
                      <a href="#">Company</a>
                      <a href="#">Team</a>
                      <a href="#">Careers</a>
                      <a href="#">Blog</a>
               </ul>
           </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                   <ul className="d-flex flex-column footer-link bd-highlight">
                      <a href="#">Help Center</a>
                      <a href="#">Cancellation Options</a>
                      <a href="#">Neighborhood Support</a>
                      <a href="#">Trust & Safety</a>
               </ul>
           </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                   <ul className="d-flex flex-column footer-link bd-highlight">
                      <a href="#">Counter Delivery,Carters Beach</a>
                      <a href="#">PostCentre,Westport</a>
                  </ul>
                  <div className="icon-container">
                      <div className="icon">
                          <RiFacebookFill size={20} color="#016450"/>
                      </div>
                      <div className="icon-insta">
                          <BsInstagram color="#fff" />
                      </div>
                      <div className="icon">
                          <AiOutlineTwitter color="#016450"/>
                      </div>
                  </div>
           </div>
       </div>
       <div className="row">
         <div className="col-lg-4 col-md-4 col-sm-4">
             <p className="text-right">CUdwell,LLC.All rights reserved.</p>
         </div>
         <div className="col-lg-2 col-md-4 col-sm-4">
             <p className="text-center">Terms&Conditions</p>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4">
             <p className="text-left">.Privacy Policy</p>
         </div>
       </div>
   </div>
  )
}
