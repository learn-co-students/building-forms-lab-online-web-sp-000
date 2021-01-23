// Add BandInput component
import React, { Component } from 'react'



class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (event)=>{
    this.setState({name: event.target.value})
  }


  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Add Band Name:</label>
          <input type = "text" name = "name" value = {this.state.bandName} onChange = {this.handleChange} />
          <button type = "submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
