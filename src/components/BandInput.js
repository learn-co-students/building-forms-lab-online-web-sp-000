// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import addBand from '../actions/AddBand'

class BandInput extends Component {
  constructor(){
    super()
    
    this.state={
      name: ''
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={event => this.submitHandler(event)}>
          <input type="text" name="name" onChange={event => this.changeHandler(event)} value={this.state.name} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
