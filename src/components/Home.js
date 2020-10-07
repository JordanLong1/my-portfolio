import React from 'react' 
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import styles from '../Home.css'
import Navbar from './Navbar'
class Home extends React.Component {

    render() {
         return (
            <div className='html'>
                <div>
                    <Navbar />
                </div>
            <div className='stars'>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'></div>
                 <h1 style={{color: 'white'}}>Jordan Long</h1>   
                    <h3 style={{color: 'white'}}>Front end developer </h3>
             <Linkedin onClick={this.handleLinkedInClick} style={{color: 'white'}} />              
             <GitHub style={{color: 'white'}}/>
            </div>

        </div>
           
         )
    };
};

export default Home