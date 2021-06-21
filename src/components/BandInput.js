import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
