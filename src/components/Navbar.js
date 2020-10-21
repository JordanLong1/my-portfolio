import React from 'react'
import { Link } from 'react-router-dom'
import {Home} from 'react-feather'
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-start">
              <Home />

              <div className='nav-end'>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contactme'>Contact Me</Link>
              </div>
            </div>
        )
    }
}

export default Navbar 
