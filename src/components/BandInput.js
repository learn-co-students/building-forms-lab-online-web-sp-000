// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions'

class BandInput extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    name: ''
  }

  handleChange = (event) => {
    //debugger
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //debugger
    // this.setState({
    //   name: event.target['name'].value
    // })
    debugger
    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  render() {
    //debugger
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
        
      </div>
    )
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (band) => {
//       dispatch(addBand(band))
//     }
//   }
  
// }



export default BandInput
