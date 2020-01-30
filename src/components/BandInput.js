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
    event.preventDefault();
    this.props.addBand(this.state.name);
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name"/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
