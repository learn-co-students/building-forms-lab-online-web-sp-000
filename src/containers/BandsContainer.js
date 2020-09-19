import React, { Component } from 'react'
import {connect} from 'react-redux';
import BandInput from '../components/BandInput'


class BandsContainer extends Component {
  render() {
    debugger 
    return(
      <div>
      <BandInput  addBand={this.props.addBand}/>
                        {console.log(this.props.addBand)}
      <ul>{this.props.bands.map((band) => {
        return <li>{band.name}</li>
      })}
      </ul>
      </div>
    )
  }
}
  const mapDispatchToProps = dispatch => {
   return {
  addBand: name => dispatch(              // we are returning key:value pair is name of our method to passing top props 
                                          // 
    
    {type: 'ADD_BAND',

    band: name // use this in the reducer case statement 
  })
  }
 
  }







 export default connect(state => ({ bands: state.bands }), mapDispatchToProps)(BandsContainer);
