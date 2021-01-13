// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }


handleOnChange(event) {
  this.setState({
    name: event.target.value
  })
}

handleOnSubmit(event){
  event.preventDefault();
  this.props.addBand(this.state);
  this.setState({
    name: '',
  });
}

  render() {
    return(
      <div>
        Band Input
        <div className="form">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text"
          onChange={(event) => this.handleOnChange(event)}
          />
          <button type="submit">Add Band </button>
          </form>
        </div>
      </div>
    )
  }
}

export default BandInput
