// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(e) => this.props.addBand(e, this.state.name)} >
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} ></input>
        </form>
        
      </div>
    )
  }
}

export default BandInput
