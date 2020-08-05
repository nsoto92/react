import React, { Component } from 'react'
import Cards from './Cards'
import axios from 'axios'

export default class HitList extends Component {
    constructor() {
        super()
        this.state = {
            targets: []
        }
    }
    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json").then((response) => {
            this.setState({
                targets: response.data
            })
        })
    }

    render() {
        let mappedTargets = this.state.targets.map((target) => {
            return <Cards image={target.image}
                name={target.name}
            />
        })
        return mappedTargets
    }
}
