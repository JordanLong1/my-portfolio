import React from 'react'
import {GitHub, Youtube} from 'react-feather'
class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <h1 className='projects-header'>My Projects</h1>
                <div className='project-one'>
                    <h4>Corner Store</h4>
                    <p>Corner Store clothing was a shopping cart / basic e-commerce web app designed for users to add and subtract products from their shopping cart. Coded in:</p>
                    <ul>
                        <li>OO Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    {/* <img></img> */}
                    <GitHub />
                    <Youtube style={{color: 'red'}}/>
                </div>
                <div className='project-two'>
                    <h4>Innovative Ag Solutions</h4>
                    {/* <img></img> */}
                    <p>Description of project two</p>
                    <GitHub />
                    <Youtube style={{color: 'red'}}/>
                </div>

                <div className='project-three'>
                    <h4>Optimal CRM</h4>
                    {/* <img></img> */}
                    <p>Description of project 3</p>
                    <GitHub /> 
                    <Youtube style={{color: 'red'}}/>

                </div>
            </div>
        )
    }
}

export default Projects