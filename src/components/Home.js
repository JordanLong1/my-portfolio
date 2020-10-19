import React from 'react' 
import { GitHub, Menu, Linkedin} from 'react-feather'
import '../Home.css'
class Home extends React.Component {

    handleClick = () => {
        this.props.history.push('/navpage')
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
         return (
            <div className='home-container'>
                <h1 className='home-head'>My Portfolio</h1>
                <Menu className='hamburger' onClick={this.handleClick}/>
                 <h1  className='opening-text'>Hello, welcome to my site. My name is Jordan Long and I am a frontend developer.</h1>   
                 <p className='opening-text'>Below are the links to my LinkedIn and Github. Click the icon in the top right to navigate :) </p>
             <a href='https://www.linkedin.com/in/jordan-long21/'> 
             <Linkedin  className='home-linkedin' /> 
             </a>
            <a href='https://github.com/JordanLong1'>
             <GitHub  className='home-github'/>
            </a>
            </div>
           
         )
    };
};

export default Home