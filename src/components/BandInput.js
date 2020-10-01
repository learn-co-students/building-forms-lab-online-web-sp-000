// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  
    state = {
      name:''
    }

  handleChange = event => {
    console.log(event.target)
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const band = {...this.state}
    this.props.addBand(this.state)
    this.setState({name:""})
  }
  render() {
    return(
      <div>
        <h1>Band Input</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
