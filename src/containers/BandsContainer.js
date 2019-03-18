import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_BAND", band: { name: this.state.name } });
  };

  onChange = event => {
    this.setState({ name: event.target.value }, () => console.log(this.state));
  };

  renderBands = () =>
    this.props.bands.map((band, i) => {
      return <li key={i}>{band.name}</li>;
    });

  render() {
    return (
      <div>
        <BandInput createBand={this.props.createBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBand: bandName =>
    dispatch({ type: "ADD_BAND", band: { name: bandName } })
});

export default connect(
  state => ({ bands: state.bands }),
  mapDispatchToProps
)(BandsContainer);
