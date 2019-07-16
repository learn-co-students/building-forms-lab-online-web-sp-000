// Add BandInput component
import React, { Component } from 'react'
// import {connect} from 'react-redux'


class BandInput extends Component {
  constructor(){
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          Name:<br></br>
        <input type='text' name='name' onChange={(event) => {this.handleChange(event)}} value={this.state.name}></input><br></br>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}


// //create a JS object that contains a function called addBand. When I call this.props.addBand(<form payload>) elsewhere, it comes back here to run our function
// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (formData) => {
//       dispatch({type: 'ADD_BAND', payload: formData})
//     }
//   }
// }

export default BandInput
