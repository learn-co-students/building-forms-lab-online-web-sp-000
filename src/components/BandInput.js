import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleInput = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.handleInput}
            placeholder=""
            value={this.state.name}
            />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
