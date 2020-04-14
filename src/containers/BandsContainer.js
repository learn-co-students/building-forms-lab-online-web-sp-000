import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

export const addBand = (name) => {
  return { type: 'ADD_BAND', band: name};
};

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, i) => <li name={i}>{band.name}</li>)

  handleAddBand = (event) => {
    this.props.addBand(event)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.handleAddBand}/>
        {this.props.bands.length}
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, { addBand })(BandsContainer)
