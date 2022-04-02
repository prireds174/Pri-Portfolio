import { useEffect, useState } from 'react'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './about.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(async() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e' ]}
                    idx= {15}
                    />
                </h1>
                <p>I am a seasoned retail worker taking a plunge into the tech world as a software engineer. I am a driven
                individual that values quality over quantity. </p>
                <p>My perseverance in my different job roles has allowed me
                to move up into management roles. I give my all and am driven to excel at whatever is thrown my way.</p>
                <p>Over the years, different parts of my career have taught me, “You don’t know if you don’t try.” I want to provide simple solutions to everyday problems people face. With my determination, empathy, and curiosity, I know I can assimilate to the needs of a business to better help others.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#2c57a6" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About