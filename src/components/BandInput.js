// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }
  

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Band Input
        <input type = "text" onChange={this.handleOnChange} value={this.state.text} />
        <input type = "submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
