// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name='name' value={this.state.name} />
          <input type="submit"/>
        </form>
        Band Input
      </div>
    )
  }
}



export default  (BandInput)
