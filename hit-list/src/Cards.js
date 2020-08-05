import React from 'react'

export default function Cards(props) {
    return (
        <div className="card">
            <img src={props.image}></img>
            <p>{props.name}</p>
        </div>
    )
}

