// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

// this is child of bandsCOntainer -
// should have form with a text input and a submition button 
// character store as this.state.name 
// We will only update the Redux store's state when the user hits the submit button.
