import React from 'react'; 
import {GitHub, Youtube} from 'react-feather'
class ProjectOne extends React.Component {
    render() {
        return (
            <div className='project-one'>
            <h4>Corner Store</h4>
            <p className='project-one-p-tag'>Corner Store clothing was a shopping cart / basic e-commerce web app designed for users to add and subtract products from their shopping cart.</p>
            <label>Developed In:</label>
            <ul>
                <li>OO Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Ruby on Rails API</li>
            </ul>
            {/* <img></img> */}
            <GitHub style={{color: 'white'}}/>
            <Youtube style={{color: 'red'}}/>
        </div>
        )
    }
}

export default ProjectOne;