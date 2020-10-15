import React from 'react'
import ProjectOne from '../Projects/ProjectOne'
import ProjectTwo from '../Projects/ProjectTwo'
import ProjectThree from '../Projects/ProjectThree'

class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <h1 className='projects-header'>My Projects</h1>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
            </div>
        )
    }
}

export default Projects