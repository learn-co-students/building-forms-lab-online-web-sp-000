// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }


  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
 
  handleSubmit = event => {
    debugger
    event.preventDefault();
    this.props.addBand(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>Add band:</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default BandInput;