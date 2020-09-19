// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
   name:''
  }
  
  handleChange= (event) => {
    this.setState({name: event.target.value})
  }

handleSubmit= (event) => {
  event.preventDefault() ;
  this.props.addBand(this.state)
}


  render() {
    return(
      <div>
            <form onSubmit={this.handleSubmit} >
             <input type="text" name={this.state} onChange={this.handleChange} />
             <input type="submit"/>
       
       
       
       
            </form>
           </div>
         )
        }
}

   








export default BandInput
