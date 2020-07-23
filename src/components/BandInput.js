import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleText = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.addBand
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.props.addBand}>
          <label>Text</label>
          <input type="text" onChange={event => this.handleText(event)} value={this.props.name}  />     
          <input type="submit"/>  
        </form>
      </div>
    )
  }
}



export default BandInput
