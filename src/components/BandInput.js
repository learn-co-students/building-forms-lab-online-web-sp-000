import React, { Component } from 'react'
import { connect } from "react-redux";

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
    e.preventDefault();
    this.props.addBand(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Band Name</label>
        <input type="text" onChange={this.handleChange} value={this.state.name} />
        <input type="submit" />
        </form>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', band: formData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput);
