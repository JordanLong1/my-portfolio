import React from 'react'
import {ProjectPicture} from '../Cards/ProjectPicture'
import {ProjectInfo} from '../Cards/ProjectInfo'
import '../Home.css'
class Projects extends React.Component {
    
    render() {
        return (
            
            <div>
                <h1 className='projects-header'>My Projects</h1>
                <div className='projects-container'>

                    <div className='flexbox-item-1'>
                    <ProjectPicture title='Corner Store' image={'../corner.png'} />
                    <ProjectInfo titleDescription='Basic Shopping cart / e-commerce type with the ability to add and remove items to a from a cart.' description='+ Created the rails API to accomplish fetching product data and present it to the client. + Used OO Javascript to build out the frontend and fetch data from the API. + Implemented various CSS animations to refine the overall presentation of the project' technologies='OO Javascript, Ruby on Rails, HTML, CSS' />
                    <button className='btn'>Github</button>
                    <button className='btn'>Youtube</button>
                    </div>

                    <div className='flexbox-item-2'>
                    <ProjectPicture title='Innovative Ag Solutions' image={'../innovative.png'}/>
                    <ProjectInfo title='Innovative Ag Solutions' titleDescription='Consultation web app for a PCA (Pest Control Advisor) to manage and consult their farmers/growers crops.' description='+ Centralized state management by using the Redux store to store all state information and for better scalability. + Engineered client side routing with BrowserRouter from the React-Router library to accelerate navigation. + Executed Single-Table-Inheritance to achieve the capability of having multiple user types (grower and salesman)' image={'../innovative.png'} technologies='Ruby on Rails, React and Redux, Semantic UI for styling.'/>
                    <button className='btn'>Github</button>
                    <button className='btn'>Youtube</button>
                    </div>

                    <div className='flexbox-item-3'>
                    <ProjectPicture title='Optimal CRM' image={'../optimal.png'}/>
                    <ProjectInfo title='Optimal CRM' titleDescription='Fake CRM with the ability for a salesrepresentative to keep track of leads, tasks, and companies.' description='+ Achieved the usage of model, view, controller (MVC) design pattern for separation of concerns within the application. + Demonstrated CRUD (create, read, update, delete) to implement a persistent storage application. + Maximized user security measures with implementing Bcrypt to safely store and salt user passwords.' technologies='Ruby on Rails'/>
                    <button className='btn'>Github</button>
                    <button className='btn'>Youtube</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects