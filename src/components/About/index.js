import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e' ]}
                    idx= {15}
                    />
                </h1>
                <p>I am a seasoned retail worker taking a plunge into the tech world as a software engineer. I am a driven
individual that values quality over quantity. My perseverance in my different job roles has allowed me
to move up into management roles. I give my all and am driven to excel at whatever is thrown my way.
Over the years, different parts of my career have taught me, “You don’t know if you don’t try.” I want to
provide simple solutions to everyday problems people face. With my determination, empathy, and
curiosity, I know I can assimilate to the needs of a business to better serve others.</p>
            </div>
        </div>
    )
}

export default About