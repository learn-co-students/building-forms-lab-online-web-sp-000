// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux'

class BandInput extends Component {

	state = {
		name: ''
	}

	onTextChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	// onSubmit(event) => {
	// 	event.preventDefault();
	// 	this.props.addBand(this.state.name)
	// }

	onSubmit = (event) => {
		// debugger
		event.preventDefault();
		this.props.addBand(this.state)
		this.setState({
			name:''
		})
	}

  render() {
    return(
    	<div>
	      <form onSubmit={this.onSubmit}>
	      	<input type="text" onChange={this.onTextChange}/>
	      	<button type='submit'>Submit</button>
	      </form>
      </div>
    )
  }
}

export default BandInput
