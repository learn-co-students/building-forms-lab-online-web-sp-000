import React, { Component } from 'react'
 import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
// import Band from './Band'

class BandsContainer extends Component {
  //  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band} />)
  renderBands = () => {
      return this.props.bands.map((band,key) => {
       
        return (
        <li key={key}> {band.name} </li>
        )
      })
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
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

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
