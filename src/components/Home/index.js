import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/P-logo.png'


import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'P', 'r', 'i', 's', 'c','i', 'l','l', 'a', ',']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '' ]

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
      return (
        <>
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i!</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                

                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={19}
                />
              </h1>
              <h2>Front Stack Developer | Foodie | Forever Learning </h2>
              <Link to="/contact" className="flat-button">
                Contact Me
              </Link>
            </div>
           <Logo />
          </div>
    
        </>
      )
    }
    
export default Home