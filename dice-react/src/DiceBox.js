import React from "react"


class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }

        this.randomizeNumbers = this.randomizeNumbers.bind(this)
    }

    randomizeNumbers() {
        this.setState(prevState => {
            return {
                num1: Math.floor(Math.random() * 7),
                num2: Math.floor(Math.random() * 7),
                num3: Math.floor(Math.random() * 7),
                num4: Math.floor(Math.random() * 7),
                num5: Math.floor(Math.random() * 7)
            }
        })


    }

    render() {
        return (
            <div className="container">
                <input type="text" placeholder={this.state.num1} disabled></input>
                <input type="text" placeholder={this.state.num2} disabled></input>
                <input type="text" placeholder={this.state.num3} disabled></input>
                <input type="text" placeholder={this.state.num4} disabled></input>
                <input type="text" placeholder={this.state.num5} disabled></input>
                <button onClick={this.randomizeNumbers}>!</button>
            </div>
        )
    }
}

export default DiceBox