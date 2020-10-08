import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  addBand(band) {
    return { type: "ADD_BAND", band };
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.addBand} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { bands: state.bands };
};
export default connect(mapStateToProps)(BandsContainer);
