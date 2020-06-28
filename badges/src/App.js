import React, { Component } from 'react'
import Form from "./Form"

export default class App extends Component {
  constructor() {
    super()
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
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="container">
        <Form
          handleChange={this.handleChange()}
          state={this.state}
        />
      </div>
    )
  }
}

