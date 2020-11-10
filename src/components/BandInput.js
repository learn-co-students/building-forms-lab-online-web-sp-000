// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux';

class BandInput extends Component {

  state = {
    name: ""
  }

handleChange = e => {
 this.setState({
   [e.target.name]: e.target.value
})
}

handleSubmit = e => {
  e.preventDefault()
  this.props.addBand(this.state.name)
  this.setState(
    {name: ""}
  )
}

  render() {
    return(
      <div>
        Band Input 
        <form
        onSubmit={this.handleSubmit}>
        <input
        onChange={this.handleChange}
        name="name"
        type="text"
        value={this.state.name}>
      
        </input>

        <input
        type="submit">
        </input>
        </form>
      </div>
    )
  }
}

// const mdp = dispatch => {
//   return {
//     addBand: (band) => {
//       dispatch({type: 'ADD_BAND', payload: band})
//     }
//   }
// }

export default BandInput
