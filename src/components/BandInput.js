import React, { Component } from 'react'

class BandInput extends Component {
  state = { 
    name: ""
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
      <label>Band Name</label>
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
            onChange={this.handleChange}
            value={this.state.name}
            />
            <input type="submit"/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
