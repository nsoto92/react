import React from "react"

class Square extends React.Component {

    render() {
        return (
            <div style={{ width: 200, height: 200, backgroundColor: this.props.color }} >

            </ div>
        )
    }
}

export default Square