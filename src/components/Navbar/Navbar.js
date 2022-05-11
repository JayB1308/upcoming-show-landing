import React from 'react'
import "./Navbar.css";
import logo from "../../images/homejam-logo.png";
import {BsSearch} from "react-icons/bs";
import {RiShoppingBag3Line} from "react-icons/ri";
import basket from "../../images/basket-icon.svg";
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="image-container">
            <img src={logo} alt="logo" />
        </div>
        <div className="nav-container">
            <div className="nav-items">
              <BsSearch className='nav-icon'/>
              <p className="nav-link">Search</p>
            </div>
          <div className="nav-items">
            <p className="nav-link">Help</p>
         </div>
          <div className="nav-items">
            <p className="nav-link">Account</p>
          </div>
          <div className="nav-items">
            <RiShoppingBag3Line className='nav-icon'/>
          </div>
        </div>
    </nav>
  )
}

export default Navbar