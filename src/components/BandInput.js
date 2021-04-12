// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
     this.setState({
       name: event.target.value
     })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
         <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Band Name:</label>
          <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
