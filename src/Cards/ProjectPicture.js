import React from 'react' 

export const ProjectPicture = props => {
    return (
        <div className='front-card'>
            <h4>{props.title}</h4>
            <img className='project-images' src={props.image} alt=''/>
        </div>
    )
}