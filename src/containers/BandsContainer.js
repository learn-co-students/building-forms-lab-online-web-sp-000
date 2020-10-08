import React, { Component } from "react";
import { connect } from "react-redux";
import { addBand } from "../actions/band";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((band) => {
          return <li>{band.name}</li>;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { bands: state.bands };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (newBand) => {
      dispatch(addBand(newBand));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
