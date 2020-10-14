// Add BandInput component
import React, { Component } from 'react';
import BandsContainer from '../containers/BandsContainer';

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.name);
    this.props.addBand(this.state.name);

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="band-name"
            value={this.state.name}
            onChange={this.handleChange}>
          </input>

          <input
            type="submit">
          </input>
        </form>
      </div>
    )
  }
}

export default BandInput
