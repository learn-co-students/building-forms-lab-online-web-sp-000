// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    const formData = event.target.value

    this.setState({
      name: formData
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state);

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type='text' value={this.state.name} onChange={this.handleChange}></input>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput;
