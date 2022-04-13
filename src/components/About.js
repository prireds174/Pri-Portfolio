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
                            <p>I am a software engineer with a passion for learning and creating.I am a driven individual that values quality over quantity.</p>
                            <br></br>
                            <p>My perseverance in my different job roles has allowed me
                            to move up into management roles. I give my all and am driven to excel at whatever is thrown my way.</p>
                            <br></br>
                            <p>Over the years, different parts of my career have taught me, “You don’t know if you don’t try.” I want to provide simple solutions to everyday problems people face. With my determination, empathy, and curiosity, I know I can assimilate to the needs of a business to better help others.</p>
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