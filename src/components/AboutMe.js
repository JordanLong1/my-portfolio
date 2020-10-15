import React from 'react'
import '../Home.css'
// import Navbar from './Navbar'
class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-container'>
              
                <h1 className='about-me-header'>About Me </h1>
            
                <div className='bio'>
                    <p> 
                    This will be the bio
                    </p>
                </div>

                <div className='frontend-skills'>
                   <h4>FrontEnd</h4>
                   <li>Javascript</li>
                   <li>React</li>
                   <li>Redux</li>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Bootstrap, Semantic UI</li>
                </div>

                <div className='backend-skills'>
                <h4>Backend</h4>
                <li>Ruby on Rails</li>
                <li>Postgres</li>
                <li>SQLite</li>
                </div>

                <div className='interests'>
            <p> list some interests</p>
                </div>

                {/* <div className='image div'>
                    <img className='avatar-pic' src='../profilepic2.jpeg' alt='' />

                </div> */}
            </div>
        )
    }; 
};

export default AboutMe