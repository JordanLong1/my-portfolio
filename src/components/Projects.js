import React from 'react'
import {ProjectPicture} from '../Cards/ProjectPicture'
import {ProjectInfo} from '../Cards/ProjectInfo'
import '../Home.css'
class Projects extends React.Component {
    

    state = {shown: false}

    onMouseEnter = e => {
        this.setState( { shown: true })
    }

    onMouseLeave = e => {
        this.setState({ shown: false})
    }

    render() {
        return (
                <div className='projects-container'>
                <h1 className='projects-header' id='projects'>Recent Work</h1>
                <h4 className='h4-for-message'>Here are a few projects I've worked on. Want to see more? Insert GitHub Link</h4>

                    <div className='project-pics-and-info'>
                        <h4 className='proj-title'>Corner Store Clothing</h4>
                    <ProjectPicture title='Corner Store' image={'../corner.png'} />
                
                        {/* <div className='project-info-div' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                            <ProjectInfo titleDescription='Basic Shopping cart / e-commerce type with the ability to add and remove items to a from a cart.' description='+ Created the rails API to accomplish fetching product data and present it to the client. + Used OO Javascript to build out the frontend and fetch data from the API. + Implemented various CSS animations to refine the overall presentation of the project' technologies='OO Javascript, Ruby on Rails, HTML, CSS' /> 
                        </div> */}
                    <button className='git-btn'>Github</button>
                    <button className='youtube-btn'>Youtube</button>
                    </div>

                    <div className='project-pics-and-info'>
                    <h4 className='proj-title'>Innovative Ag Solutions</h4>
                    <ProjectPicture title='Innovative Ag Solutions' image={'../innovative.png'}/>
                    {/* <ProjectInfo title='Innovative Ag Solutions' titleDescription='Consultation web app for a PCA (Pest Control Advisor) to manage and consult their farmers/growers crops.' description='+ Centralized state management by using the Redux store to store all state information and for better scalability. + Engineered client side routing with BrowserRouter from the React-Router library to accelerate navigation. + Executed Single-Table-Inheritance to achieve the capability of having multiple user types (grower and salesman)' image={'../innovative.png'} technologies='Ruby on Rails, React and Redux, Semantic UI for styling.'/> */}
                    <button className='git-btn'>Github</button>
                    <button className='youtube-btn'>Youtube</button>
                    </div>

                    <div className='project-pics-and-info'>
                    <h4 className='proj-title'>Optimal CRM</h4>
                    <ProjectPicture title='Optimal CRM' image={'../optimal.png'}/>
                    {/* <ProjectInfo title='Optimal CRM' titleDescription='Fake CRM with the ability for a salesrepresentative to keep track of leads, tasks, and companies.' description='+ Achieved the usage of model, view, controller (MVC) design pattern for separation of concerns within the application. + Demonstrated CRUD (create, read, update, delete) to implement a persistent storage application. + Maximized user security measures with implementing Bcrypt to safely store and salt user passwords.' technologies='Ruby on Rails'/> */}
                    <button className='git-btn'>Github</button>
                    <button className='youtube-btn'>Youtube</button>
                    </div>
                </div>
        )
    }
}

export default Projects