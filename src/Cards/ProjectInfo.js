import React from'react'
import '../Home.css'
export const ProjectInfo = props => {
    return (
        <div>
     <p>{props.titleDescription}</p>
    <p>{props.description}</p>
    <li>{props.technologies}</li>
        </div>
    )
}

