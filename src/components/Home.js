import React from 'react' 
import { GitHub, Menu, Linkedin} from 'react-feather'
import '../Home.css'
import Navbar from './Navbar'
class Home extends React.Component {

    handleClick = () => {
        this.props.history.push('/navpage')
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