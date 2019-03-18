import React, { Component } from "react";
// import { connect } from "tls";
import { connect } from "react-redux";

class BandList extends Component {
  renderBands = () => {
    return this.props.bands.map((band, i)=> <li key={i}>{band}</li>);
  };

  render() {
    return (
      <div>
        Bands:
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

export default connect(state => ({ bands: state.bands }))(BandList);
