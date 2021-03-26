// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event =>{
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            className="name"
            value={this.state.name}
            />
          <input type="submit"/>
        </form>
        Band Input
      </div>
    )
  };
};

export default BandInput;
