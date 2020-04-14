// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input onChange={event => this.handleChange(event)}>
          </input>
          <button type="submit" name="submit" id="submit">Submit </button>
        </form>
      </div>
    )
  }
}

export default BandInput
