import React from "react"
import './styles/navbar.scss'
import Logo from '../assets/images/plogo3clear.png'


const Navigation = () => {
  return (
    <div>
    <nav id="navbar-example2" className="navbar navbar-light px-3">
    <a className="navbar-brand" href="/">
    <img src={Logo} width="70" height="70"/>
    </a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#work">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Connect</a>
      </li>
    </ul>
  </nav>
  
  </div>
  )
}

export default Navigation