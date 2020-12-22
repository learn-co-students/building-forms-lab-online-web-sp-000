// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  nameChange = event => {
    this.setState({
      name: event.target.value
    })
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.formSubmit(event)}>
          <input type='text' onChange={event => this.nameChange(event)} value={this.state.name}  />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
