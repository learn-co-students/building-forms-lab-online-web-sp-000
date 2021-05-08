// Add BandInput component
import React, { Component } from 'react';

export default class BandInput extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      text: '',
    })
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <label>Add Band Name</label>
          <input type="text"
                  onChange={
                    (e) => this.handleChange(e)}
                  value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

