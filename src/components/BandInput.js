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
    this.props.addBand(this.state);

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Band name: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
