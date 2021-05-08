// Add BandInput component
import React, { Component } from 'react';

export default class BandInput extends Component {

  //creating empty state with key name 
state = {
  name: ''
}

handleChange(e){
  this.setState({
    name: e.target.value
  });
}
//don't forget to set state with name 
  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <label>Add Band Name</label>
          <input type="text"
                  value={this.state.name}
                  onChange={
                    (e) => this.handleChange(e)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

