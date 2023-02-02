import React from 'react'
import logo from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png";
import "./Header.css"


function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt="" />
        <img className='logo2' src={logo2} alt="" />
    </div>
  )
}

export default Header