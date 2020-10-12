import React from 'react' 
import {Linkedin, GitHub, Mail} from 'react-feather'
import style from '../Home.css'
class ContactMe extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <h1 className='header'> Contact Me </h1>
                <a href='https://www.linkedin.com/in/jordan-long21/'> 
                <Linkedin className='linked-icon' />
             </a>
             <a href='https://github.com/JordanLong1'>
            <GitHub className='github-icon'/>
            </a>
            <Mail className='mail-icon' />
            </div>
        )
    }
}

export default ContactMe