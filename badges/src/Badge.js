import React, { Component } from 'react'

export default class Badge extends Component {
    render(props) {
        return (
            <div>
                <h1 style={{ backgroundColor: "red" }}>Badge:</h1>
                <div className="badges">
                    <p>Name: {this.props.fName} {this.props.lName}</p>
                    <p>Phone: {this.props.telephone.slice(0, 3) + "-" + this.props.telephone.slice(3, 6) + "-" + this.props.telephone.slice(6)}</p>
                    <p>Place of Birth: {this.props.placeOfBirth}</p>
                    <p>Favorite Food: {this.props.favFood}</p>
                    <p>Email: {this.props.emailAddress}</p>
                </div>
                <div className="aboutMe">
                    <p>{this.props.about}</p>
                </div>
            </div>
        )
    }
}
