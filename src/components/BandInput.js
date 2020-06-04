// Add BandInput component
import React, { Component } from 'react'

export class BandInput extends Component {
 
  state = {
    text: ''
  }
  
  handleOnChange = event => {
    // Handle Updating Component State
    const target = event.target
    const value = target.value 
    const name = target.name 
    this.setState({
      [name]: value 
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    // Create quote object from state
    let newBand = {};
    newBand.name = this.state.text;

    console.log('newBand', newBand); // logs out new band just before it is dispatched
    console.log('in BandInput container, this.props.addBand', this.props.addBand)
    // Pass quote object to action creator
    this.props.addBand(newBand)

    // Update component state to return to default state
    this.setState({
      text: "" 
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="name">Band Name</label>
          <input
            onChange={(event) => this.handleOnChange(event)}
            name="text"
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

// const mapStateToProps = (state) => {
//   return {
//     bands: state.bands
//   };
// };

//export default connect(mapStateToProps)(BandInput);
//export default BandInput
