// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid'

class BandInput extends Component {
  constructor(props) {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand({...this.state, id: uuid()});
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.name}</p>
          <input
            onChange={this.handleChange}
            name='name'
            type='text'
            value={this.state.name}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
