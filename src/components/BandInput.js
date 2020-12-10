import React, { Component } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux';

class BandInput extends Component {
  
  state = {
    name: ''
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const band = this.state
    this.props.addBand(band)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}

export default (BandInput);
