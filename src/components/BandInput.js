// Add BandInput component
import React, { Component } from 'react'
//import addBand from '../reducers/manageBand'

class BandInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      name : event.target.value
    })
  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    //console.log("propsaddBand:", this.props.addBand(this.state.name))
    this.props.addBand(this.state.name);
    this.setState({
      name: ''
    })
  }

  

  render() {
    console.log("state:", this.state)
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="input" name="name" onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }
}

export default BandInput
