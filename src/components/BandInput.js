// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ""
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Add a Band</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
