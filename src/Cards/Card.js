import React from 'react' 

export const Card = props => {
    console.log(props)
    return (
        <div className='front-card'>
            <h4>{props.title}</h4>
            <img className='front-images' src={props.image} alt=''/>
        </div>
    )
}