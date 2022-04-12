import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from './AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../assets/images/P-logo.png'
import Selfie from '../assets/images/profile.jpeg'
import Loader from 'react-loaders'
import About from './About'
import Contact from './Contact'


import './styles/home.scss';
import Header from './Header'
import Cube from './Cube'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    
  const nameArray = [' ', 'P', 'r', 'i', 's', 'c','i', 'l','l', 'a', ',']
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '' ]
    
      useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
      return (
        <>
          <div className="container home-page">
          <Header />
            

              <About />
              <Cube />

              <Contact />
            </div>
          
    
          <Loader type="ball-scale-ripple-multiple" />
        </>
      )
    }
    
    export default Home





