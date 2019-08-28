// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {name: "",}

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    e.preventDefault();
    this.props.dispatch({ type:"ADD_BAND", band: this.state})
  }
  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Band Input</label>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <input type="submit"/>
      </form>
      </div>
    )
  }
}

export default BandInput
