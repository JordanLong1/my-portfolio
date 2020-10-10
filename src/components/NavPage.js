import React from 'react'
import {Link } from 'react-router-dom'
class NavPage extends React.Component {
    render() {
        return (
            <div>
            
                <Link to='/' >Home</Link><br></br>
                <Link to='/projects'>Projects</Link><br></br>
                <Link to='/contactme'>Contact Me</Link><br></br>
                <Link to='/aboutme'>About Me</Link>
            </div>
        )
    };
};

export default NavPage