import React from 'React'; 
import {GitHub, Youtube} from 'react-feather'
class ProjectThree extends React.Component {
    render() {
        return (
            <div className='project-two'>
            <h4>Innovative Ag Solutions</h4>
            {/* <img></img> */}
            <p className='project-two-p-tag'>Innovative Ag Solutions is a consultation web app for PCA'S (Pest Control Advisors) or salesman/representatives and farmers or growers in the agricultural industry.</p>
            <p className='project-two-p-tag'>A grower can log-in add their particular crops and a salesman can login to their account and view and manage their growers crops. </p>
            <label>Developed In:</label>
            <ul>
                <li>Ruby on Rails API</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>Semantic UI</li>
            </ul>
            <GitHub style={{color: 'white'}}/>
            <Youtube style={{color: 'red'}}/>
        </div>
        )
    };
};

export default ProjectThree;