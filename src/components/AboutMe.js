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
                   <li className='language-list' >JavaScript</li>
                   <img className='language-icons' src='../jsicon.png' alt='' />
                   <li className='language-list' >React</li>
                   <img className='language-icons' src='../react-icon.png' alt='' />
                   <li className='language-list' >Redux</li>
                   <img className='language-icons' src='../redux-logo.png' alt='' />
                   <li className='language-list' >HTML</li>
                   <img className='language-icons' src='../html-logo.png' alt='' />
                   <li className='language-list' >CSS</li>
                   <img className='language-icons' src='../css-logo.png' alt='' />
                   <li className='language-list' >Bootstrap, Semantic UI</li>

                    </div>

                    <div className='skills-column'>
                <h4 className='skills-header'>Backend</h4>
                <li className='language-list' >Ruby on Rails</li>
                <img className='language-icons' src='../rails-logo.png' alt='' />
                <li className='language-list' >PostgreSQL</li>
                <img className='language-icons' src='../postgre-logo.png' alt='' />
                <li className='language-list' >SQLite</li>
                <img className='language-icons' src='../sqlite-logo.png' alt='' />
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