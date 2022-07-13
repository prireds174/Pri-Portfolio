import { useEffect, useState } from 'react'
import Fade from "react-reveal/Fade"
import Selfie from "../assets/images/profile.jpeg"
import AnimatedLetters from './AnimatedLetters'
import './styles/about.scss'
import '../App.scss';



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(async() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className="secion" id="about">
            <div className="container">
                <div className="about-section">
                    <div className="content">
                        <Fade bottom cascade>  
                            <h1>
                                <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e' ]}
                                idx= {15}
                                />
                            </h1>
                            </Fade>
                            <p>I am a driven software engineer with a passion for learning and creating.</p>
                            <br></br>
                            <p>My experience in customer service can be
translated into a passion for solving problems and providing solutions for others. I am meticulous and boldly face new
intellectual challenges.</p>
                            <br></br>
                            <p>I am always willing to learn new tools and skills to enhance my team. With my determination,
empathy, and curiosity, I am constantly honing my strengths and learning my deficiencies.</p>
                        </div>
                        <div className="image-wrapper">
                         <img src={Selfie} className="rounded float-end" alt="..."/>
                        </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About
