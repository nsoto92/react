import React, { Component } from 'react'
import axios from 'axios'

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        axios.get('https://api.imgflip.com/get_memes').then((response) => {
            this.setState({
                allMemeImgs: response.data
            })
            console.log(this.state.allMemeImgs.data.memes[0].url)
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const meme = Math.floor(Math.random() * this.state.allMemeImgs.data.memes.length)
        const newMeme = this.state.allMemeImgs.data.memes[meme].url
        this.setState({
            randomImage: newMeme
        })

    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name="topText"
                        value={this.state.topText}
                        placeholder='Top Text'
                        onChange={this.handleChange}
                    />

                    <input
                        type='text'
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder='Bottom Text'
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>

            </div >
        )
    }
}
