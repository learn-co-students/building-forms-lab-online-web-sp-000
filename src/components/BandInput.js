// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand({name: this.state.name});
    console.log(this.state)
    this.setState({
      name: ''
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" onChange={this.handleChange}/>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return state
// }

// export default connect(null, mapDispatchToProps)(BandInput)
// export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
export default BandInput;
