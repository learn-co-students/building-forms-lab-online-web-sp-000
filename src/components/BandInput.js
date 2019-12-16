// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      text: '',
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add band</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput);
