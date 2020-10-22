import React from 'react' 

export const ProjectPicture = props => {
    return (
        <div className='front-card'>
            <img className='project-images' src={props.image} alt=''/>
        </div>
    )
}