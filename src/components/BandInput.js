import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Enter Band Name:</label> <br/><br/>
        <input 
          type="text" 
          name="band" 
          placeholder="band name" 
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default BandInput
