// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band = { text: this.state.text }
    this.props.addBand(band)
    this.setState({
      text: ""
    })
  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        Band Input
        <input type = "text" onChange={this.handleOnChange} value={this.state.text}>

        </input>
        </form>
      </div>
    )
  }
}

export default BandInput
