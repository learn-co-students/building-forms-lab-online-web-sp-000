// Add BandInput component
import React, { Component } from 'react';
import {connect} from 'react-redux';


class BandInput extends Component {

state = {
  name: ''
}
  handleChange(event) { this.setState({name: event.target.value}) }
  handleOnSubmit(event)  {
    event.preventDefault();
    this.props.addBand(this.state);

    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input onChange={(event) => this.handleChange(event)}type="text" id="name" value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default BandInput
