import React from'react'
import '../Home.css'
export const ProjectInfo = props => {
    return (
        <div>
            <h4 >{props.title}</h4>
            {props.titleDescription}
    <p>{props.description}</p>
    <li>{props.technologies}</li>
        </div>
    )
}

