// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    const band = this.state;
    this.props.addBand(band);
  };
  render() {
    return (
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
