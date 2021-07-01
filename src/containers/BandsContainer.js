import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  render() {
    console.log(this.props.bands)
    // renderBands = () => this.props.bands.map()

    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
