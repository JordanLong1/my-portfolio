import React from 'react'
import {Link } from 'react-router-dom'
import stylez from '../Home.css'
class NavPage extends React.Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='navpage-container'>
                <div className='nav-links'>
                <Link to='/' >Home</Link><br></br>
                <Link to='/projects'>Projects</Link><br></br>
                <Link to='/contactme'>Contact Me</Link><br></br>
                <Link to='/aboutme'>About Me</Link>
            <button className='close-btn' onClick={this.handleClick}>Close</button>
                </div>
            </div>
        )
    };
};

export default NavPage