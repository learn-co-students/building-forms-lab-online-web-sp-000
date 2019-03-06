// Add BandInput component
import React, { Component } from 'react'
class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
    }
  };

  handleOnChange(event){
    this.setState({
      name: event.target.value
    })
  };

 handleOnSubmit = (event) => {
   event.preventDefault();
   this.props.addBand(this.state)
 }

 render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleOnSubmit(event)} >
          <input type="text" name="name" onChange={ (event) => this.handleOnChange(event) } />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

export default BandInput;
