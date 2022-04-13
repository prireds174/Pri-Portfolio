import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from './AnimatedLetters'
import Logo from './Logo'

import Selfie from '../assets/images/profile.jpeg'
import Loader from 'react-loaders'
import About from './About'



import './styles/home.scss';
import Header from './Header'
import Cube from './Cube'
import Work from './Work'
import Footer from './Footer'
import Skills from './Skills'

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
            <Work />
            <About />
            
            <Skills />


           
            <Footer />
            </div>
          
    
          {/* <Loader type="ball-scale-ripple-multiple" /> */}
        </>
      )
    }
    
    export default Home





