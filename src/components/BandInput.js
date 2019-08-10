// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import manageBand from '../reducers/manageBand'
class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.props)
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.name}
          name="name"
          onChange={(event) => this.handleOnChange(event)}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.props.bands.map(band => {
            return <li>{band}</li>
          })}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
