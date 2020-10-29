import React from'react'
import '../Home.css'
export const ProjectInfo = props => {
    return (
        <div className='project-info-div'>
            <h4 className='proj-info-h4'>{props.title}</h4>
     <p>{props.titleDescription}</p>
    <p>{props.description}</p>
    <li>{props.technologies}</li>
        </div>
    )
}

