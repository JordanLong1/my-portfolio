import React from 'react'
import stylez from '../AboutMe.css'
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
                    frontend skills maybe throw icons
                </div>

                <div className='backend-skills'>
                backend skills maybe throw some icons
                </div>

                <div className='interests'>
            <p> list some interests</p>
                </div>

                <div className='image div'>
                    {/* <img src='' alt=''>Image of myself here</img> */}

                </div>
            </div>
        )
    }; 
};

export default AboutMe