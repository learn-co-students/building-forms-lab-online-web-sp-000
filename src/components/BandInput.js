// Add BandInput component
import React, { Component } from 'react'

export class BandInput extends Component {
 
  state = {
    name: ''
  }
  
  handleOnChange = event => { 
    this.setState({
      name: event.target.value 
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    // Create band object from state
    let newBand = {};
    newBand.name = this.state.name;

    console.log('newBand', newBand); // logs out new band just before it is dispatched
    console.log('in BandInput container, this.props.addBand', this.props.addBand)
    // Pass band object to action creator
    this.props.addBand(newBand)

    // Update component state to return to default state
    this.setState({
      name: "" 
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="name">Band Name</label>
          <input
            onChange={(event) => this.handleOnChange(event)}
            name="name"
            type="text"
            value={this.state.name}
          />
          <button type="submit" >Add Band</button>
        </form>
        <div>
          Band Input
        </div>
      </div>
    )
  }
};

