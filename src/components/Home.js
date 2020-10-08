import React from 'react' 
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import styles from '../Home.css'
import Navbar from './Navbar'
import {Menu} from 'react-feather'
import {Link} from 'react-router-dom'
class Home extends React.Component {

    handleClick = () => {
        
    }
    render() {
         return (
            <div className='html'>
                <Navbar >
                </Navbar>
                <Menu className='hamburger' onClick={this.handleClick}/>
            <div className='stars'>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'></div>
                 <h1 style={{color: 'white'}}>Jordan Long</h1>   
                    <h3 style={{color: 'white'}}>Front end developer </h3>
             <a href='https://www.linkedin.com/in/jordan-long21/'> 
             <Linkedin style={{color: 'white'}} /> 
             </a>
            <a href='https://github.com/JordanLong1'>
             <GitHub style={{color: 'white'}}/>

            </a>
            </div>

        </div>
           
         )
    };
};

export default Home