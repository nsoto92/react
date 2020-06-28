import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    // Name is blank string that will show on h1 value. nameList is array that populates on submit
    this.state = {
      name: '',
      nameList: []
    }
    // Binding functions to state
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
      nameList: [...prevState.nameList, this.state.name]
    }))
    this.setState({
      name: ''
    })
  }


  // Render
  render() {
    const listItems = this.state.nameList.map((i) => <li>{i}</li>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Display Box */}
          <h1>{this.state.name}</h1>

          {/* input */}
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Type name here"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>

          {/* Ordered List */}
          <ol>
            {listItems}
          </ol>
        </form>
      </div>
    )
  }
}
