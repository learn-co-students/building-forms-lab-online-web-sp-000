import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band Input</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
