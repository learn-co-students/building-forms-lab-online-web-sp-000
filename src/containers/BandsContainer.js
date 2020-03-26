import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  displayBands = () => {
    if(this.props.bands.length !== 0) {
      return this.props.bands.map(band => <li>{band.name}</li>)
    }
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.dispatch}/>
        <ul>
          {this.displayBands()}
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

export default connect(mapStateToProps) (BandsContainer)
