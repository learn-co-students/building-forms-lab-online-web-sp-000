// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class BandInput extends Component {

  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    // debugger
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    // debugger
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event)}>
         <p>
           <label>Band Name</label>
           <input type="text" value={this.state.name} onChange={this.handleChange}/>
         </p>
         <p>
           <input type="submit" />
         </p>
       </form>
       {this.state.name}
      </div>
    )
  }
}




