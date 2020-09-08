// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const band = {
      name: this.state.name
    };
    this.props.addBand(band);
    // this.setState({
    //   name: ''
    // })
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Band Name:</label>
          <input name="name" value={this.state.name} type="text" onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
    )
  }
}

export default BandInput
