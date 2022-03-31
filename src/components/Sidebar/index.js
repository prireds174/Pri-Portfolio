import { Link, NavLink} from 'react-router-dom'
import './index.scss'

import LogoSubtitle from '../../assets/images/logo_sub.png'
import LogoP from "../../assets/images/P-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoP} alt="logo"/>
            <img className= 'sub-logo' src={LogoSubtitle} alt="Priscilla"/>
        </Link> 
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://www.linkedin.com/in/priscillaro/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4d"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://github.com/prireds174'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4d"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar