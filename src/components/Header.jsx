import React from 'react'
import logo from '../assets/Header.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header
