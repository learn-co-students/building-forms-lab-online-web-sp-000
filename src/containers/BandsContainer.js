import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    console.log("Container:")
    return(
      <div>
        BandsContainer
        <div>
          {<BandInput addBand={this.props.addBand}/>}
        </div>
        <div>
          <ul>
            {this.props.state.bands.map(band => {
              return <li>{band.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (name) => dispatch({ type: 'ADD_BAND', payload: name })
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
