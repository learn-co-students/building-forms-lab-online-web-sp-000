// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props);
    
    // initial state
    this.state = {
      name: ''
    };
  } 

  // changes local state on input change
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  // update stores state when user hits submit
  handleOnSubmit = event => {
    event.preventDefault();

    const band = {
      name: this.state.name
    }

    // dispatch action to update stores state
    this.props.addBand(band);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.name} />
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default BandInput; 
