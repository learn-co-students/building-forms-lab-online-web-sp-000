// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  
  state = {
    //set up a controlled form with internal state
    name: '' 
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const band = {
    
      ...this.state
    }

    this.props.addBand(band) 
    this.setState({
      name:""
    })
  }


  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <div>
          Band Input
          <input 
            name='band'
            type = 'text'
            onChange={this.handleOnChange}
            value={this.state.name} 
             />
        </div>
      </form>
    )
  }
}

export default BandInput
