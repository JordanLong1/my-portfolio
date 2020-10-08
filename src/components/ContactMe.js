import React from 'react' 
import {Linkedin, GitHub, Mail} from 'react-feather'
import style from '../Home.css'
class ContactMe extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <h1 className='header'> Contact Me </h1>
            <Linkedin className='linked-icon' />
            <GitHub className='github-icon'/>
            <Mail className='mail-icon' />
            </div>
        )
    }
}

export default ContactMe