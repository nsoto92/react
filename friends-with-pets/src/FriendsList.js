import React from "react"

import friendNames from "./friendNames"
import Friend from "./Friend"

function FriendsList() {
    const finishedList = friendNames.map(item => <Friend key={item.name} friend={item} />)
    return (
        finishedList
    )
}

export default FriendsList