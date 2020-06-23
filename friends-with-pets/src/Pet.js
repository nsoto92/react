import React from "react"



function Pets(props) {
    console.log(props)
    return (

        <div>
            <p>Name: {props.pets.name}</p>
            <p>Breed: {props.pets.breed}</p>
        </div>
    )
}

export default Pets