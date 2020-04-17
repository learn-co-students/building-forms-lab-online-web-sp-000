// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = { name: ''};

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type="text"
            onChange={event => this.handleOnChange(event)}
            value={this.state.name} 
          />
          <input type="submit" />
        </form>
        Band Input
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({
      type: "ADD_BAND"
    }, formData)
  }
}

export default connect(null, mapDispatchToProps)(BandInput);
