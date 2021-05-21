// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';


class BandInput extends Component {

  state = {
    text: "",
  }

  handelChange = (e) => {
    this.setState({
      text: e.target.value,
      name: e.target.value,
    })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.addBand(this.state))
    this.props.newBand(this.props.addBand(this.state))
    
    this.setState({
      text: "",
      name: "",
    })    
    
  }

  render() {
    
    return(
      <div>
        Band Input
        <form onSubmit={e => this.handelSubmit(e)}>
          <input type="text" onChange={e => this.handelChange(e)} value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  
  return {
    newBand: (b) => (dispatch(b))
  }
}

export default connect(null, mapDispatchToProps) (BandInput);
