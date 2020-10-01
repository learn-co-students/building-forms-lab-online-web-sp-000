import React, { Component } from 'react'
import manageBand from "../reducers/manageBand"
import {createStore} from 'redux'
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"
import { connect } from 'react-redux';
class BandsContainer extends Component {

  store = createStore(manageBand,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  
  
  
  render() {
    return(
   
      <div>
          <h1>BandsContainer</h1>
          <BandInput addBand={this.props.addBand} />
          <Bands bands={this.props.bands}/>
          
        </div>
    
    )
  }
}

const mapStateToProps = ({ bands }) => ({bands})
const mapDispatchToProps = dispatch => (
  {addBand: band => dispatch({ type: 'ADD_BAND', band })}
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
