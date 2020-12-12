import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: '' // We create our state with a single attribute, name, and leave it blank.
  }

  handleChange = event => {
    this.setState({
      name: event.target.value // We create a handleChange function that sets the state equal to the value entered in the name spot.
    })
  }

  handleSubmit = event => { // We create a handleSubmit function that accesses the addBand action from our reducer.
    event.preventDefault()
    this.props.addBand(this.state) // We pass in the current state into the addBand.

    this.setState({ // Finally, we 'reset' our state's value to be blank.
      name: '',
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Create Band:</label> <br/><br/>
        <input /* Here we include our values and onChange function in the input part of the code */
          type="text" 
          name="band" 
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default BandInput
