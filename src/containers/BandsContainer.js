import React, { Component } from 'react'
import {connect} from "react-redux"
import {addBand} from "../action/bands"
import BandInput from '../components/BandInput'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(b=><li>{b.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addBand: (band)=>dispatch(addBand(band))
  }
}

const mapStateToProps = (state)=>{
  return {bands: state.bands }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
