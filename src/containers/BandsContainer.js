import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    console.log(this.props.bands)
    return this.props.bands.map(band => <li key={band.name}>{band.name}</li>)
  }

  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    bands: state.bands,
  }
}

const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({ type: 'ADD_BAND', payload: name })
})


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
