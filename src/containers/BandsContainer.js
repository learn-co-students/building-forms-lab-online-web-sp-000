import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'; 
import { addBand } from '../containers/Band'





class BandsContainer extends Component {

  renderBands = () => {
    console.log(this.props.bands)
    return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
  }
  
  handleAddBand = (formData, e) => {
    e.preventDefault()
    this.props.addBand(formData)
  }

  render() {
    return(
      <div>
        <BandInput
          addBand={this.handleAddBand}
          handleChange={this.handleChange}
        />
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

export default connect(mapStateToProps, { addBand })(BandsContainer);