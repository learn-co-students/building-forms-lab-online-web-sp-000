// Add BandInput component
import React, { Component } from 'react'

export class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band</label>
          <input type='text' onChange={this.handleChange} value={this.state.name} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}



export default BandInput

