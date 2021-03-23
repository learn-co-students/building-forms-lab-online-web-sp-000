import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/actions';
import uuid  from 'uuid';

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => {
      let id = uuid();
      return <li key={id}>{band.name}</li>
    });
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul className="bands-list">
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   // console.log(state)
//   return {
//     bands: state.bands
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: band => dispatch({type: 'ADD_BAND', band: band})
//   }
// }


export default connect(
  state => ({bands: state.bands}), 
  { addBand }
)(BandsContainer);
