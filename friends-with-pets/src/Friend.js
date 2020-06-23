import React from "react"

import friendNames from "./friendNames"
import Pets from "./Pet"

function Friend(props) {
    const petUpdate = props.friend.pets.map(item => <Pets pets={item} />)
    return (
        < div >
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age} </p>
            <p>Pet(s): {petUpdate} </p>
        </div >
    )

}

export default Friend