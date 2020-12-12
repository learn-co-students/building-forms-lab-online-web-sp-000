// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }


  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };


  render() {
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
        	<p>
        		<label>Add Band</label>
        		<input type="text"
        		 onChange={this.handleChange}
        		 value={this.state.name}
        		 />
        	</p>
        	<button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
