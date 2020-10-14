import React from 'react'
import {GitHub, Youtube} from 'react-feather'
class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <h1 className='projects-header'>My Projects</h1>
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
            </div>
        )
    }
}

export default Projects