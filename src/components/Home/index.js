import LogoTitle from '../../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";

import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P', 'r', 'i', 's', 'c','i', 'l','l', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '' ]

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi! <br /> I'm
                Priscilla,
                <br />
                Software Engineer
                </h1>
                <h2>Full Stack Developer | Foodie | Forever Learning </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home