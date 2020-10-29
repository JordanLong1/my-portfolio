import React from 'react'
import {Home} from 'react-feather'
import {Link} from 'react-scroll'
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-start">
              <Home className='navbar-links' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} ></Home>

              <div className='nav-end'>
              <Link className='navbar-links'
               activeClass='active'
               to='aboutme'
               spy={true}
               smooth={true}
               offset={0}
               duration={1000}
               >About Me
               </Link>

               <Link className='navbar-links'
               activeClass='active'
               to='projects'
               spy={true}
               smooth={true}
               offset={0}
               duration={1000}
               >Projects
               </Link>

               <Link className='navbar-links'
               activeClass='active'
               to='contactme'
               spy={true}
               smooth={true}
               offset={0}
               duration={1000}
               >Contact Me</Link>

              </div>
            </div>
        )
    }
}

export default Navbar 
