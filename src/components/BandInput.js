import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = { name: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.createBand(this.state.name);
    this.setState({ name: "" });
  };

  onChange = event => {
    this.setState({ name: event.target.value }, () => console.log(this.state));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.name}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default BandInput;
