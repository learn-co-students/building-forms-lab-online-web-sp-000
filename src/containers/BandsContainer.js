import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, idx) => <Band key={idx} band={band} />)
  
  render() {
    // {console.log(this.props.bands)}
    debugger

    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
