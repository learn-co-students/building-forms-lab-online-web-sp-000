import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  addBand = state => {
    this.props.dispatch({
      type: "ADD_BAND",
      band: state
    });
  };

  renderBands = () => {
    console.log(this.props.bands);
    return this.props.bands.map(band => <li>{band.name}</li>);
  };

  render() {
    return (
      <div>
        BandsContainer
        <ul>{this.renderBands()}</ul>
        <BandInput addBand={this.addBand} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

export default connect(mapStateToProps)(BandsContainer);
