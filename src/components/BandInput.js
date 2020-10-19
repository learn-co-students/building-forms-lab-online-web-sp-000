// Add BandInput component
import React, { Component } from 'react'

// You will need to write the BandInput component as a child of BandsContainer.
// This component should have a form with a text input and submit button
// update this component's state each time the user types a new character in the input, stored as this.state.name
// only update the Redux store's state when the user hits the submit button. 
// The dispatched action required to initiate this update should be set up in BandsContainer and passed down as the prop addBand to BandInput.

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