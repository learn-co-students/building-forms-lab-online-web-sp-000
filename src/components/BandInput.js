// Add BandInput component
import React, { Component } from 'react'

// import manageBand from '../reducers/manageBand'
class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("in submit", this.state)
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.name}
          name="name"
          onChange={(event) => this.handleOnChange(event)}
          />
          <button type="submit">Submit</button>
        </form>
       
      </div>
      
    )
  }
}



export default BandInput
