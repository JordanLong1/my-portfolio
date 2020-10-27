import React from 'react' 
import '../Home.css'
class ContactMe extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClick = () => {
        window.location.href = "mailto:jordanleelong5@gmail.com"
    }


    
    render() {
        return (
            <div className='contact-container' id='contactme'>
                <div className='contact-text-div'>
                <h1 className='contact-header'>Interested in collaborating or contacting me?</h1>
                <p>Teamwork makes the dream work, lets chat. </p>
                </div>
            <div className='mail-div-contact'>
                <button onClick={this.handleClick} className='convo-btn'>Start a conversation</button>
            </div>
            </div>
        )
    }
}

export default ContactMe