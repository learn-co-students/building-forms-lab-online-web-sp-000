import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    let collectedUserState = this.state
    this.props.addBand(collectedUserState)
    this.setState({
        name: ''
    });
}

  handleOnChange = (event) => {
    this.setState({
        name: event.target.value
    })
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
    	    <label>add band</label>
          <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.name}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
}

export default BandInput
