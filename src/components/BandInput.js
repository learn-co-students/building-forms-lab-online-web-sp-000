// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = { name: "" };
  
  handleSubmit = event =>{
    event.preventDefault()
    const formData = {
      name: this.state.name
    }
    console.log(`submitting ${formData.name}`)
    this.props.addBand(formData)
  }

  handleChange = event =>{
    const input = event.target.value
    console.log(`updating form state.name to ${input}`)
    this.setState({
      name: input
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default BandInput
