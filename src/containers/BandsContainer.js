import React from 'react'
import BandInput from "../components/BandInput";
import Bands from '../components/Bands'
import { connect } from 'react-redux'

const BandsContainer = props =>  {
    return(
      <div>
        <BandInput addBand={props.addBand}/>
        <Bands bands={props.bands}/>
      </div>
    )
}

const props = ({ bands }) => ({ bands })
const disp = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(props, disp)(BandsContainer)
