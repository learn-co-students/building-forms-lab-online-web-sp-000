import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map((band) => <li>{band.name}</li>)
    return(
      <div>
        //BandsContainer
          <ul>{bands}</ul>
          <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})
const mapDispatchToProps = dispatch => ({addBand: formData => dispatch({ type: "ADD_BAND", payload: formData})})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
