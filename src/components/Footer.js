import React from "react"
import Fade from "react-reveal/Fade"
import './styles/footer.scss'

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>Get in Touch</h2>
          </Fade>
          <a className="email-link" href={`mailto:${"priscilla.rojas174@gmail.com"}`}>
          <img src="https://img.icons8.com/fluency/96/000000/new-post.png"/>
          </a>
          <div className="social-icons">
            
              <a
                href="https://www.linkedin.com/in/priscillaro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/>
              </a>
              <a
                href="https://github.com/prireds174"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="https://img.icons8.com/glyph-neue/64/000000/github.png"/>
              </a>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer