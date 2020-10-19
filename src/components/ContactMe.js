import React from 'react' 
import {Linkedin, GitHub, Mail, Menu} from 'react-feather'
import '../Home.css'
class ContactMe extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClick = () => {
        window.location.href = "mailto:jordanleelong5@gmail.com"
    }

    handleMenu = () => {
        this.props.history.push('/navpage')
    }
    
    render() {
        return (
            <div className='contact-container'>
                <Menu className='hamburger' onClick={this.handleMenu}/>
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