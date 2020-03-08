import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  };

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <div>
          Band Input
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="band name"
          />
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default BandInput;