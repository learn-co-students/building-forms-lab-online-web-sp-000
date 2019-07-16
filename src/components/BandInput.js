// Add BandInput component
import React, { Component } from "react";

// handle(this.props.addBand(this.state)

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    debugger;
    this.props.addBand(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              onChange={event => this.handleOnNameChange(event)}
              value={this.state.band}
              id="name"
              placeholder="band name"
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
