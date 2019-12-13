// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleFormSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleInputChange(event)}
          ></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
