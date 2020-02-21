// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state={
    name:''
  }

  handleChange=(event)=>{
    this.setState({
      name:event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Name" type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
