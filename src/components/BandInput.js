// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
  }

  render() {
    return(
      <div>
        <h1>Band Input Form</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnNameChange(event)} placeholder="Band Name" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
