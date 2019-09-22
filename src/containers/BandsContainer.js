import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'
import Band from './Band';

class BandsContainer extends Component {

renderBands = () => {
  return this.props.bands.map(b => 
  	<Band 
  	name={b.name}
  	key={b.id} 
  	band={b} />)
}


  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()} 
        </div>
      
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", payload: name })
})



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)