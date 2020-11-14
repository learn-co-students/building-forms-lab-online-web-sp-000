
import React, { Component } from 'react'


class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }


  handleOnChange = event => {
     this.setState({ name: event.target.value })
   }
//we only want to update the Redux store's state when the user hits submit.  Dispatched action should be setup in BandsContainer
  handleOnSubmit = event => {
  event.preventDefault();
  
  this.props.addBand(this.state);
  this.setState({name: '' });
}


  render() {
    return(
      <div>
        <p>Enter Band Name:</p>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange} />
        <p>
        {this.state.name}
          <input type="submit" />
        </p>
      </form>
      </div>
    )
  }
}


export default BandInput;
