import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';


class BandsContainer extends Component {
  render() {
  let bands = this.props.bands.map(band => { return <li>{band.name}</li>} );
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
         <ul>
         {bands}
         </ul>
      </div>
    )
  }
}

const mapStateToProps = state  => { return({bands: state.bands}) }

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
