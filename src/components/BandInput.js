// Add BandInput component
import React, { Component } from 'react'
// import{ connect } from 'react-redux'
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
      [event.target.name]: event.target.value
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
    return(
      <div>
       {/* <form onSubmit={event => this.props.addBand(this.state.name, event) }> */}
       <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>add Bands</label>
          <input type="text" 
          name='name' 
          onChange={(event) => this.handleChange(event)} value={this.state.name} 
          value={this.state.name}/>
          <button type='Submit'/>
        </form>
        
      </div>
    )
  }
}


 

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
// })

export default BandInput;
