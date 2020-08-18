import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  onChangeHandler = event => {
    this.setState({
      name: event.target.value
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' });
  }

  render() {
    return(
      <div>
        <h1>Add band</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.onChangeHandler} value={this.state.name} type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
