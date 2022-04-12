import { useState, useEffect } from 'react'
import { useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import env from 'react-dotenv'
import AnimatedLetters from './AnimatedLetters'
import './styles/contact.scss'
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
          e.preventDefault()

          emailjs
            .sendForm(
                'gmail',
                'template_2vlgj1w',
                form.current,
                'cPEXrH7MoJQnvPvld'
            )
            .then(
                () => {
                    alert('Message Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send, please try again')
                }
            )
      }

    return (
    <>
        <div className="container contact-page" id="connect">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['G', 'e', 't', ' ', 'i', 'n', ' ', 'T', 'o', 'u', 'c', 'h']}
                    inx={15}
                    />
                </h1>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required>
                                </textarea>
                            </li>
                            <input type="submit" className='flat-button' value='Send'/>

                        </ul>
                    </form>

                </div>
            </div>
        </div>
        

    </>
    )

}

export default Contact