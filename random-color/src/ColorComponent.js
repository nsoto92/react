import React, { Component } from 'react'
import axios from 'axios'

export default class ColorComponent extends Component {
    constructor() {
        super()
        this.state = {
            color: ""
        }
    }
    componentDidMount() {
        axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then((response) => {
            console.log(response.data.colors[0].tags[0].name)
            this.setState({
                color: response.data.colors[0].tags[0].name

            })
        })
    }
    render() {
        const color = this.state.color
        const bgColor = {
            backgroundColor: color
        }
        return (
            <div className="color" style={bgColor}>

            </div>
        )
    }
}
