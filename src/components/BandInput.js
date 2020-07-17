// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        Band Input
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={event => this.onChange(event)}
              value={this.state.name}
            />
            <button type="submit" value="Submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default BandInput;
