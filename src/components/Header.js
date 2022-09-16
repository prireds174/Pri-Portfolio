import React from "react"
import { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import Fade from "react-reveal/Fade"
import './styles/header.scss'
import Resume from '../assets/images/Resume.pdf'

const Header = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
          
        const nameArray = [' ', 'P', 'r', 'i', 's', 'c','i', 'l','l', 'a', '']
        const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '' ]
        const detailOne = ['F', 'o', 'o', 'd', 'i', 'e', '']
        const detailTwo = ['F', 'o', 'r', 'e', 'v', 'e', 'r', '', 'L', 'e', 'a', 'r', 'n', 'i', 'n', 'g', '']
          
            useEffect(() => {
              setTimeout(() => {
                setLetterClass('text-animate-hover')
              }, 4000)
            }, [])
          
                  
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
                   <h1 className="nameplate">
                     <span className={letterClass}>H</span>
                     <span className={`${letterClass} _12`}>i,&nbsp;</span>
                     <span className={`${letterClass} _13`}>I</span>
                     <span className={`${letterClass} _14`}>'m</span>
                     <AnimatedLetters
                       letterClass={letterClass}
                       strArray={nameArray}
                       idx={15}
                     />
                    </h1>
                     
                     <h1>
                     <AnimatedLetters
                       letterClass={letterClass}
                       strArray={jobArray}
                       idx={18}
                     />
                   </h1>
                   <h1>
                   <AnimatedLetters
                       letterClass={letterClass}
                       strArray={detailOne}
                       idx={22}
                     />  
                   </h1>
                   <h1>
                   <AnimatedLetters
                       letterClass={letterClass}
                       strArray={detailTwo}
                       idx={20}
                     />  
                   </h1>
          <Fade bottom>
            <p>Eager problem-solver, building digital solutions. Staying curious.</p>
          </Fade>
          <Fade bottom>
          <a
              href={Resume}
              className="primary-btn resume"
            >
              RESUME
            </a>
            <a
              href={`mailto:${"priscilla.rojas174@gmail.com"
              }`}
              className="primary-btn"
            >
              CONTACT ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header

