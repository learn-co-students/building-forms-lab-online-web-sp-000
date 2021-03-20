import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  addBand = (name) => {
    this.props.dispatch({
      type: "ADD_BAND",
      name: name
    })
  }

  renderBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        BandsContainer
      <BandInput addBand={this.addBand} />
      <ul>
        {this.renderBands()}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands} 
}

export default connect(mapStateToProps)(BandsContainer)
