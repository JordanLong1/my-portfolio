import React from 'react'
import {GitHub, Youtube} from 'react-feather'
class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <h1 className='projects-header'>My Projects</h1>
                <div className='project-one'>
                    <p>Description of project one</p>
                    {/* <img></img> */}
                    <GitHub />
                    <Youtube style={{color: 'red'}}/>
                </div>
                <div className='project-two'>
                    {/* <img></img> */}
                    <p>Description of project two</p>
                    <GitHub />
                    <Youtube style={{color: 'red'}}/>
                </div>

                <div className='project-three'>
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