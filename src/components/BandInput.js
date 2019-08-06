// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.dispatch({type:"ADD_BAND", band: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput