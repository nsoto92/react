import React from 'react';
import Square from "./Square"

import "./style.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    this.firstButton = this.firstButton.bind(this)
    this.secondButton = this.secondButton.bind(this)
  }


  // #1
  // You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.
  firstButton() {
    this.setState(prevState => {
      if (prevState.colors[0] === "white") {
        return {
          colors: ["black", "black", "black", "black"]
        }
      } else if (prevState.colors[0] === "black") {
        return {
          colors: ["white", "white", "white", "white"]
        }
      } else {
        return {
          colors: ["white", "white", "white", "white"]
        }
      }
    })
  }

  // #2
  // Add a second button. The second will turn the top half (both squares) of the grid purple.
  secondButton() {
    this.setState(prevState => {
      if (prevState.colors[0] !== "purple") {
        return {
          colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
        }
      }
    })
  }



  render() {
    const squareMap = this.state.colors.map(item => <Square color={item} />)

    return (
      <div className="App">
        <div className="container">
          {squareMap}
        </div>
        <button onClick={this.firstButton}>Button 1</button>
        <button onClick={this.secondButton}>Button 2</button>
      </div>
    );
  }
}

export default App;
