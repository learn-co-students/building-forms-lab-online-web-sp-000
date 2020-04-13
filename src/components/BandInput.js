// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p><input type="text" onChange={(event) => this.handleOnChange(event)} name="name" value={this.state.name}  placeholder="Band Name"></input></p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
