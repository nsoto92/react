import React, { Component } from 'react'

export default class Form extends Component {
    render(props) {
        console.log(props)
        return (
            < div className="badgeForm" >
                <form>
                    <input
                        type="text"
                        minLength="3"
                        name="fName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="lName"
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        minLength="3"
                        name="emailAddress"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                    />
                    <input
                        type="tel"
                        minLength="3"
                        name="telephone"
                        placeholder="Phone #"
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="favFood"
                        placeholder="Favorite Food"
                    />
                    <textarea
                        name="about"
                        minLength="3"
                        placeholder="Tell us about yourself"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}
