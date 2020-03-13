// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" 
        value={this.state.name}
        onChange={(event)=> this.handleChange(event)}></input>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
