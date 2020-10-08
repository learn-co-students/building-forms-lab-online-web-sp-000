// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state={
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="enter name here" value={this.state.name} type="text" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
