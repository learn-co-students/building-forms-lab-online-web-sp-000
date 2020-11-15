import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''  
  }

  //[event.target.name]: event.target.value
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }  

  handleOnSubmit = event => {
    event.preventDefault();
    const band = this.state;
    this.props.addBand(band);
    this.setState({
      name: ''
    });
  }  

  render() {
    return(
      <div>
        Band Input
        <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="col-md-5">
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-default">Add</button>
            </div>
          </div>          
        </form>
      </div>
    )
  }
}

//export default connect(null, { addBand })(BandInput);
export default BandInput
