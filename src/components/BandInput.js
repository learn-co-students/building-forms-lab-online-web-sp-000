// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      name: ''
    };
  } 

  // changes local state on input change
  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  // update stores state when user hits submit
  handleOnSubmit = event => {
    event.preventDefault();
    // debugger
    const band = {
      name: this.state.name
    }
    // dispatch action to update stores state
    this.props.addBand(band);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        Band Input
        {/* {console.log(this.props)} */}
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.name} />
          <br />
          <input type="submit" value="Add" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     bands: state.bands
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: band => dispatch({type: 'ADD_BAND', band: band})
//   }
// }

export default BandInput; 
