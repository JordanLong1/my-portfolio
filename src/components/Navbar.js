import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return (
            <div className="ui menu">
                <div className="header item">
                  
                </div>
                <Link to ='/' className="item">
                Home
                </Link>
                <Link to='/aboutme' className="item">
               About Me!
                </Link>
                <Link to='projects' className="item">
                  Projects
                </Link>
                <Link to='/contactme' className="item">
                 Contact me!
                </Link>
                </div>
        )
    }
}

export default Navbar