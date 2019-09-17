import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Band from '../components/Band'
import {connect} from 'react-redux'

class BandsContainer extends Component {


  render() {    
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Band bands={this.props.bands}/>
      </div>
    )
  }
}


const mapStateToProps = ({ bands }) => ({ bands })


const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)


