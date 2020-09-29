import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Add Band:</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
