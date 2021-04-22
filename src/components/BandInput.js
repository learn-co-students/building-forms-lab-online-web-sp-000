// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })

  }

  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleInputChange}/>
          <input type="submit" />

        </form>
      </div>
    )
  }
}

export default BandInput
