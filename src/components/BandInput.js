import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
  state = { name: "" };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_BAND", band: this.state.name })
  // };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  onTextChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        Enter a band name:
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.props.onChange}
            // onChange={this.onTextChange}
            // value={this.state.text}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default BandInput