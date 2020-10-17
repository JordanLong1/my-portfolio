import React from'react'
import '../Home.css'
export const BackOfCard = props => {
    console.log(props)
    return (
        <div className={props.divClassName}>
            <h4 >{props.title}</h4>
            {props.titleDescription}
    <p>{props.description}</p>
    <li>{props.technologies}</li>
        </div>
    )
}

