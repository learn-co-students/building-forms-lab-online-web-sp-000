// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super()
      this.state = {
        name: ''
      };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ''})
  };

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Band Name:</label>
            <input 
            type="text"
            onChange={e => this.handleChange(e)}
            value={this.state.name} />
          </p>
            <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
