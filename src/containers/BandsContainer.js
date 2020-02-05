// import React, { Component } from 'react'

// class BandsContainer extends Component {
//   render() {
//     return(
//       <div>
//         BandsContainer
//       </div>
//     )
//   }
// }

// export default BandsContainer


import React, { Component } from 'react';
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
 
class BandsContainer extends Component {
 
  // renderBands = () => {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}



  render() {

    const bands = this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {/* {this.renderBands()} */}
        {bands}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })
 
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);