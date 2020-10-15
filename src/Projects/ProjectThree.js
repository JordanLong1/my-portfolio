import React from 'react'; 
import {GitHub, Youtube} from 'react-feather'
import '../Home.css'

class ProjectThree extends React.Component {
    render() {
        return (
            <div className='project-three'>
            <h4>Optimal CRM</h4>
            {/* <img></img> */}
            <p className='project-three-p-tag'>Optimal CRM (Customer Relationship Management) system for managing companys relationships and interactions. </p>
            <p className='project-three-p-tag'>A salesrep can login, schedule tasks with potential leads or upcoming meetings, and view the organizations they have already landed.</p>
            <label>Developed In:</label>
            <ul>
                <li>Ruby on Rails</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <GitHub style={{color: 'white'}}/> 
            <Youtube style={{color: 'red'}}/>

        </div>
        )
    };
};

export default ProjectThree;