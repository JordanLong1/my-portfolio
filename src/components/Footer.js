import React from 'react'
import {Twitter, GitHub, Linkedin, Mail} from 'react-feather'
class Footer extends React.Component {
    render() {
        return (
            <div className='footer-container'>
                <div>
                    Opening text maybe a quote
                </div>

                <div className='social-icons'>

                    <div className='icon-divs'>
                    <a href='https://twitter.com/WebDevJordan'>
                        <Twitter className='icons'/>
                    </a>
                    </div>

                <div className='icon-divs'>
                <a href='https://www.linkedin.com/in/jordan-long21/'> 
                 <Linkedin className='icons'/>
                    </a>
                </div>
                  <div className='icon-divs'>
                    <a href='https://github.com/JordanLong1'>
                     <GitHub className='icons' />
                    </a>
                    </div>
                      <div className='icon-divs'>
                    <Mail  onClick={this.handleClick} className='icons'/>
                    </div>

                </div>

                <div className='copyright'>
                    Made by me, in react
                </div>
            </div>
        )
    };
};

export default Footer