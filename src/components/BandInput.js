// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // console.log('clicked')
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }




  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input 
            type='text'
            value={this.state.name}
            onChange={this.handleChange} 
          />

          <input type='submit'onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
 }


export default BandInput
