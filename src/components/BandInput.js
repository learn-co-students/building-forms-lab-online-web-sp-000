// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = { 
    name: '', 
  };
  
  handOnChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({ 
      name: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          
          <label>Add Band Here</label>
            <input 
              type="text"
              value={this.state.name}
              onChange={(event) => this.handOnChange(event)}
            />
          
          
          <input type="submit"/>
        </form>
        <p>
          <label>Controlled Form Check: </label>
          {this.state.name}
        </p>
      </div>
    )
  }
}


export default BandInput
