import React, { Component } from 'react'
import Badge from "./Badge"

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fName: '',
            lName: '',
            emailAddress: '',
            placeOfBirth: '',
            telephone: '',
            favFood: '',
            about: '',
            badges: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // Functions 
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
            badges: [...prevState.badges,
            [{
                fName: this.state.fName,
                lName: this.state.lName,
                emailAddress: this.state.emailAddress,
                placeOfBirth: this.state.placeOfBirth,
                telephone: this.state.telephone,
                favFood: this.state.favFood,
                about: this.state.about
            }]]
        }))
        this.setState({
            fName: '',
            lName: '',
            emailAddress: '',
            placeOfBirth: '',
            telephone: '',
            favFood: '',
            about: ''
        })
    }

    // Form rendering.
    render(props) {
        const readyBadge = this.state.badges.map((i) => {
            if (this.state.badges.length > 0) {
                return (
                    <Badge
                        fName={i[0].fName}
                        lName={i[0].lName}
                        emailAddress={i[0].emailAddress}
                        placeOfBirth={i[0].placeOfBirth}
                        telephone={i[0].telephone}
                        favFood={i[0].favFood}
                        about={i[0].about}
                    />
                )
            } else {
                return <p>FAIL</p>
            }
        })

        const { fName, lName, emailAddress, placeOfBirth, telephone, favFood, about } = this.state
        const isEnabled = fName.length > 0 && lName.length > 0 && emailAddress.length > 0 && placeOfBirth.length > 0 && telephone.length > 0 && favFood.length > 0 && about.length > 0
        return (
            < div className="badgeForm" >
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        minLength="3"
                        name="fName"
                        value={this.state.fName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="lName"
                        value={this.state.lName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        minLength="3"
                        name="emailAddress"
                        value={this.state.emailAddress}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="placeOfBirth"
                        value={this.state.placeOfBirth}
                        placeholder="Place of Birth"
                        onChange={this.handleChange}
                    />
                    <input
                        type="tel"
                        minLength="3"
                        name="telephone"
                        value={this.state.telephone}
                        placeholder="Phone #"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        minLength="3"
                        name="favFood"
                        value={this.state.favFood}
                        placeholder="Favorite Food"
                        onChange={this.handleChange}
                    />
                    <textarea
                        name="about"
                        value={this.state.about}
                        minLength="3"
                        placeholder="Tell us about yourself"
                        onChange={this.handleChange}
                    />
                    <button disabled={!isEnabled} type="submit">Submit</button>
                </form>
                {readyBadge}
            </div >
        )
    }
}
