import React from 'react'
import '../Home.css'
import {Bio} from './Bio'
// import Navbar from './Navbar'
class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-container' id='aboutme'>
              
                <h1 className='about-me-header'>Hi, I'm Jordan. Nice to meet you.</h1>
            
                <div className='bio'>
                    <Bio />
                </div>

                <div className='skills-container'>

                <div className='column-wrapper'>

                <div className='skills-column'>
                   <h4 className='skills-header'>FrontEnd</h4>
                   <li>JavaScript</li>
                   <li>React</li>
                   <li>Redux</li>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Bootstrap, Semantic UI</li>
                    </div>

                    <div className='skills-column'>
                <h4 className='skills-header'>Backend</h4>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                    </div>
         
            <div className='skills-column'>
                <h4 className='skills-header'>Interests</h4>
                 <p>When I'm not coding I enjoy watching or playing anything sports related. Participating in outdoor activities of any kind, and watching movies or playing video games.</p>
            </div>
            </div>
            </div>
            </div>
        )
    }; 
};

export default AboutMe