// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  };

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={event => this.handleSubmit(event) }>
          <p>
            <label>Band Name:</label>
            <input 
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.name} />
          </p>
            <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
