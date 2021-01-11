// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid';
//import { connect } from 'react-redux';
//import { addQuote } from '../actions/quotes';


class BandInput extends Component {
  state = {
    //set up a controlled form with internal state
    name: ''
  }
  
  handleOnChange = event => {
    // Handle Updating Component State
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    //const band = {...this.state, id: uuid()}
    // Pass band object to action creator
    //console.log(band)
    this.props.addBand(this.state)
    // Update component state to return to default state
    this.setState({name:''})
  }

  render() {
    return(
                // <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                //   <div className="form-group">
                //     <label htmlFor="name" className="col-md-4 control-label">Name</label>
                //     <div className="col-md-5">
                //       <input
                //         type="text"
                //         className="form-control"
                //         value={this.state.name}
                //         onChange={this.handleOnChange}
                //         name="name"
                //       />
                //     </div>
                //   </div>
                //   <div className="form-group">
                //     <div className="col-md-6 col-md-offset-4">
                //       <button type="submit" className="btn btn-default">Add</button>
                //     </div>
                //   </div>
                // </form>
	        <form onSubmit={this.handleOnSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>    )
  }
}

export default BandInput
