// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  onChangeHandler = event => {
    this.setState({
      name: event.target.value
    })
  }

  onSubmitHandler = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        Band Input
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.onChangeHandler} type="text" value={this.state.name} ></input>
        </form>
      </div>
    )
  }
}

export default BandInput
