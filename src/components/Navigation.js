import React from "react"
import './styles/navbar.scss'


const Navigation = () => {
  return (
    <div>
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
    <a className="navbar-brand" href="#">Navbar</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#about">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#connect">Connect</a>
      </li>
    </ul>
  </nav>
  
  </div>
  )
}

export default Navigation