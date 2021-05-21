import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js';
import  addBand  from '../actions/addBand.js';


class BandsContainer extends Component {

allBands = () =>{
 return this.props.bands.map(band => <li key={band.id} >{band.text}</li>)
}

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand = {addBand} />
        <ul>
        {this.allBands()}
        </ul>
        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {bands: state.bands}
}

export default connect(mapStateToProps) (BandsContainer)
