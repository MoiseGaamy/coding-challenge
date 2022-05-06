import React from 'react'
import '../css/profile.css'
import {MdOutlinePhotoCamera} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {BsListCheck,BsCalculator} from "react-icons/bs"
import {BiHomeHeart} from "react-icons/bi"
import {SiHomeadvisor,SiSimpleanalytics} from "react-icons/si"
import {TiMessages} from "react-icons/ti"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineNoteAlt} from "react-icons/md"
import {GoLink} from "react-icons/go"

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className="profile-style">
        <img src="./profi.jpg" alt='profile' className="img-style" />
        <div className="camera-icon">
          <MdOutlinePhotoCamera color='#fff'/>
        </div>
        <h4>Alex Assenmacher</h4>
        <p>Home Buyer</p>
        <button type="button" class="btn edit-btn">Edit Profile</button>
      </div>
      <div className="profile-category">
        <hr className="line"/>
        <div className="profile-cg-icon">
          <div>
             <p className="category-text">Profile</p>
         </div>
          <div>
            <CgProfile size={30} color="#999"/>
          </div>
        </div>
         <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">My listing</p>
          <div>
            <BsListCheck size={30} color="#999"/>
          </div>
        </div>
        <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Saved homes</p>
          <div>
            <BiHomeHeart size={30} color="#999"/>
          </div>
        </div>
        <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Saved Search</p>
          <div>
            <SiHomeadvisor size={30} color="#999"/>
          </div>
        </div>
       <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Massages</p>
          <div>
            <TiMessages size={30} color="#999"/>
          </div>
        </div>
       <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Notifications</p>
          <div>
            <IoIosNotifications size={30} color="#999" />
          </div>
        </div>
       <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Billing</p>
          <div>
            <BsCalculator size={30} color="#999" />
          </div>
        </div>
        <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Analytics</p>
          <div>
            <SiSimpleanalytics size={30} color="#999" />
          </div>
        </div>
       <hr className="line"/>
        <div className="profile-cg-icon">
          <p className="category-text">Blog</p>
          <div>
            <MdOutlineNoteAlt size={30} color="#999"/>
          </div>
        </div>
      <hr className="line"/>
      <div >
        <p className="profile-link-text">Profile link</p>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="https://www.Udwell.com/profile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
           <span class="input-group-text custom-input-group-text" id="basic-addon2"><GoLink size={30} color="#999"/></span>
         
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
