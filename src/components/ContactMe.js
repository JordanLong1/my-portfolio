import React from 'react' 
import {Linkedin, GitHub, Mail} from 'react-feather'
import style from '../Home.css'
class ContactMe extends React.Component {

    handleClick = () => {
        window.location.href = "mailto:jordanleelong5@gmail.com"
    }
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
            <Mail className='mail-icon' onClick={this.handleClick}/>
            </div>
        )
    }
}

export default ContactMe