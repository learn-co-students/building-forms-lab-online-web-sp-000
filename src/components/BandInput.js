// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand({name:this.state})

    this.setState({
      name: '',
    })
  
  }

  handleChange=(event) => {
    this.setState({
       name: event.target.value
    });
  }






  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}


export default BandInput
// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
// })

// export default connect(null, mapDispatchToProps)(BandInput);
