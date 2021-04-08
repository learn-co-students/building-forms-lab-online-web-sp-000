import React, { Component } from 'react'

class BandInput extends Component {

  state = { id: 1, name: '' }

  handleChange = (e) => {
    this.setState({ ...this.state, name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ id: this.state.id + 1, name: '' })
    // document.getElementById('band').focus()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band </label>
          <input
            type="text"
            id='band'
            onChange={this.handleChange}
            value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
