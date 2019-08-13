// Add BandInput component
import React, { Component } from 'react'
class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
        name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' name='name' value={this.state.name} onChange={(event) => this.handleChange(event)}>
          </input>
          <button type='submit'>Submit Band Name
          </button>
        </form>
      </div>
    )
  }
}

export default BandInput
