import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, i) => { console.log(band); return (<li key={i}>{band.name}</li> )})

  render() {
    return(
      <div>
        < BandInput
          createBand={this.props.createBand}
        />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = (dispatch) => ({
  createBand: (band) => (dispatch({
    type: "ADD_BAND",
    band: {name: band}
  }))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
