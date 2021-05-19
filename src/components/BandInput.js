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

 handleSubmit = event => {
   event.preventDefault();

   const band = {...this.state}
   this.props.addBand(band);

   this.setState({
     name: '',
   })
 };


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

           <label>add band</label>
           <input
         name="name"
         type="text"
         onChange={this.handleChange} value={this.state.name}/>

         <button type="submit">Add Band</button>
      </form>
      </div>
    )
  }
}



export default BandInput;
