import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from "../components/BandInput"; // import to give props
import BandList from "../components/BandList"; // import to give props

class BandsContainer extends Component {

  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <BandList bands={this.props.bands} />
      </div>
    );
  }
}
// giving addBand as props to BandInput
// giving this state BANDS as props to BandList

const mapStateToProps = state => {
  return { bands: state.bands }
}


const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band })
})


export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);
