// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBand(this.state)
        this.setState({ name: '' })
    }

    handleChange = e => {
        this.setState( { name: e.target.value })
    }

    render() {
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    Input:
                    <input type='text' onChange={e => this.handleChange(e)} value={this.state.name}/>
                </label>
                <input type='submit'/>
            </form>
        )
    }
}

export default BandInput
