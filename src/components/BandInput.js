import React, { Component } from 'react'

// dispatched action should be set up in BandsContainer and passed down as prop to addBand & BandInput
class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>add band</label>
          <input type="text" onChange={event=> this.handleChange(event)} value={this.state.name}></input>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
