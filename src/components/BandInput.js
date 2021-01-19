// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandInput extends Component {

  //set up a controlled form with internal state
  state = {
    name: '',
  }

  handleOnChange = event => {
    this.setState({
        name: event.target.value
    });
  }

  // Handle Form Submit event default
  // Create quote object from state
  // Pass quote object to action creator
  // Update component state to return to default state
  handleOnSubmit = event => {
    event.preventDefault();
    const newBand = {...this.state};
    this.props.addBand(newBand);
    this.setState(
      {
        name: ''
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          Band Input: <input type="input" name="input" value={this.state.name} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      addQuote: newQuote => dispatch(addQuote(newQuote))
    };
  };


//add arguments to connect as needed
export default BandInput
