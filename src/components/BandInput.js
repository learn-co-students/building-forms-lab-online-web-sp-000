// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name:""
    })
  }
  
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <label id="band-name"> Band Name: </label>
          <input type="text" name="name" value={ this.state.name} onChange={ this.handleOnChange} />
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
