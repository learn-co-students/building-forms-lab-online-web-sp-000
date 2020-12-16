// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // console.log("submit:", event.target.name)
    this.props.addBand(this.state.name);
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>          
          <div>
            <input
              onChange={this.handleOnChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <div>
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput;
