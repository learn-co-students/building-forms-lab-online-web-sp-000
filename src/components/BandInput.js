import React, { Component } from "react";
// import { connect } from "react-redux";

class BandInput extends Component {
  state = { name: "" };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_BAND", band: this.state.name })
  // };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        Enter a band name:
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default BandInput;
