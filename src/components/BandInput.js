// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand({name: this.state.name})
    this.setState({ name: ''})
  }

  render() {
    debugger;
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.name}
                 onChange={ (e) => this.setState({ name: e.target.value }) }
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
