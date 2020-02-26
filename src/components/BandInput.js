//Form
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addBand} from '../actions/bands'

class BandInput extends Component {
state = {
  name: ""
}
  handleOnChange = (event) =>{
    return this.setState({name: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let newBand = this.state.name
    this.props.addBand(newBand)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleOnSubmit}>
         <input 
         type="text" 
         onChange={this.handleOnChange}
         value={this.state.name}
         ></input>
         <button type="submit">Add</button>
       </form>
      </div>
    )
  }
}

export default connect(null, {addBand})(BandInput);
