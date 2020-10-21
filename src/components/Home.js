import React from 'react' 
import Navbar from './Navbar'
import AboutMe from './AboutMe'
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
                <Navbar />
                 <h1  className='home-text'>Front-end Developer </h1>  
                 <h4 className='home-text'>I write code that users interact with, and I love what I do. </h4>

                 <div>
                <img className='avt' src={'../Avatar.png'} alt='' />
                 </div>
                 <div className='desk-pic-div'>
                <img  className='desk-pic' src={'../desk.png'} alt=''/>
                 </div>
                <div>
                <AboutMe />
                </div>
                {/* <div>
                    <Projects />
                </div> */}

            </div>
           
         )
    };
};

export default Home