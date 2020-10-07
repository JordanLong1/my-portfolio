import React from 'react' 
import {Linkedin, GitHub, Mail } from 'react-feather'
class ContactMe extends React.Component {
    render() {
        return (
            <div>
                <h1 className='contact header'> Contact Me </h1>
            <Linkedin />
            <GitHub />
            <Mail />
            </div>
        )
    }
}

export default ContactMe