import React from 'react'
import {BackOfCard} from '../Cards/BackOfCard'
import {FrontCard} from '../Cards/FrontCard'
import '../Home.css'
class Projects extends React.Component {
    state = {frontCard: true }

    handleClick = () => {
        console.log('hello')
        this.setState({ frontCard: !this.state.frontCard })
    }

    render() {
        return (
            
            <div className='projects-container'>
                <h1 className='projects-header'>My Projects</h1>
                <div onClick={ () => this.setState({ frontCard: !this.state.frontCard})}>
                    <FrontCard title='Corner Store' image={'../corner.png'} />
                </div>
                {/* <div>
                    <FrontCard title='Innovative' image={'../innovative.png'}/>
                </div>
                <div>
                    <FrontCard title='Optimal CRM' image={'../optimal.png'}/>
                </div>
            
                <div className='back-card' onClick={this.handleClick}>
                 <BackOfCard divClassName='project-one' titleDescription='Basic Shopping cart / e-commerce type with the ability to add and remove items to a from a cart.' description='+ Created the rails API to accomplish fetching product data and present it to the client. + Used OO Javascript to build out the frontend and fetch data from the API. + Implemented various CSS animations to refine the overall presentation of the project' technologies='OO Javascript, Ruby on Rails, HTML, CSS' />
                 <BackOfCard divClassName='project-two' title='Innovative Ag Solutions' titleDescription='Consultation web app for a PCA (Pest Control Advisor) to manage and consult their farmers/growers crops.' description='+ Centralized state management by using the Redux store to store all state information and for better scalability. + Engineered client side routing with BrowserRouter from the React-Router library to accelerate navigation. + Executed Single-Table-Inheritance to achieve the capability of having multiple user types (grower and salesman)' image={'../innovative.png'} technologies='Ruby on Rails, React and Redux, Semantic UI for styling.'/>
                 <BackOfCard divClassName='project-three' title='Optimal CRM' titleDescription='Fake CRM with the ability for a salesrepresentative to keep track of leads, tasks, and companies.' description='+ Achieved the usage of model, view, controller (MVC) design pattern for separation of concerns within the application. + Demonstrated CRUD (create, read, update, delete) to implement a persistent storage application. + Maximized user security measures with implementing Bcrypt to safely store and salt user passwords.' technologies='Ruby on Rails'/>

                </div> */}

                
            
            </div>
        )
    }
}

export default Projects