import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_BAND", band: {name: this.state.name} });
  };

  onTextChange = event => {
    this.setState({ name: event.target.value });
  };

  renderBands = () =>
    this.props.bands.map((band, i) => {
      return <li key={i}>{`${band.name}`}</li>;
    });

  render() {
    return (
      <div>
        <BandInput onSubmit={this.onSubmit} onChange={this.onTextChange} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

export default connect(state => ({ bands: state.bands }))(BandsContainer);
