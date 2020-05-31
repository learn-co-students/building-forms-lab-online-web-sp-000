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

  onSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={ event => this.onSubmit(event) }>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}></input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
