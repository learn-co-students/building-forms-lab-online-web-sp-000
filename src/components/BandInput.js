// Add BandInput component
import React, { Component } from 'react'
import{ connect } from 'react-redux'
// import { addBand} from '../containers/Band'

class BandInput extends Component {


  constructor (props){
     super(props);

  this.state= {
    name: ''
  }

}
  

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    console.log("props", this.props);
    return(
      <div>
       {/* <form onSubmit={event => this.props.addBand(this.state.name, event) }> */}
       <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>add Bands</label>
          <input type="text" 
          name='name' 
          onChange={(event) => this.handleChange(event)} value={this.state.name} 
          value={this.state.name}/>
          <input type='Submit'/>
        </form>
        
      </div>
    )
  }
}


 


export default BandInput;
