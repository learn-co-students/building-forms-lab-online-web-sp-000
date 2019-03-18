import React, { Component } from "react";
import { connect } from "react-redux";

/* 
When I use BandInput.handleSubmit, it works in the browser but the tests say:
     Invariant Violation: Could not find "store" in either the context or props of "Connect(BandInput)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(BandInput)".
When I pass onSubmit into props from BandsContainer, that error is gone,
but I can't figure out how to affect the container state (to send the band
  name to the dispatch)
*/

class BandInput extends Component {
  state = { name: "" };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_BAND", band: this.state.name })
  // };

  // handleChange = e => {
  //   this.setState({ name: e.target.value });
  // };

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