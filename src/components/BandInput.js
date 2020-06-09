// Add BandInput component
import React, { Component } from 'react';
//import {connect} from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
//debugger;
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
    //document.getElementById('input-box').value = '';
  }

  render() {
    return(
      <div>
        Band Input
        <form
          onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Add band
          </label>
          <input
            id='input-box'
            type='text'
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}>
          </input>



        </form>
      </div>
    )
  }
}
// <input
//   type='submit'>
// </input>



export default BandInput;


// You will need to write the BandInput component as a child of BandsContainer. This component should have a form with a text input and submit button. We would like to update this component's state each time the user types a new character in the input, stored as this.state.name. We will only update the Redux store's state when the user hits the submit button. The dispatched action required to initiate this update should be set up in BandsContainer and passed down as the prop addBand to BandInput.
