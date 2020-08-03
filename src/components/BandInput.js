// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state= {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
          <label for="name">Band Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
