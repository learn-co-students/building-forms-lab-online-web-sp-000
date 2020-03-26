// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand({type: 'ADD_BAND', band: this.state})
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} type='text'/>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
