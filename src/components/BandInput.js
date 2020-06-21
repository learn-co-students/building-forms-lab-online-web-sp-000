// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

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
        <form onSubmit={this.handleOnSubmit}> 
          <input type='text' onChange={this.handleOnChange} 
          value={this.state.name}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: 'ADD_BAND', band})
})

export default connect(null, mapDispatchToProps)(BandInput)
