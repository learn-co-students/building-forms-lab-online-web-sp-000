import React, { Component } from "react";
import BandInput from "../components/BandInput";
import Bands from "../components/Bands";
import { addBand } from "../actions/bands";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bands: state.bands };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addBand());
//     }
//   };
// };

export default connect(
  mapStateToProps,
  { addBand }
)(BandsContainer);
