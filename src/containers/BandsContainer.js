import React, { Component } from 'react'
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import BandList from "../components/BandList";

class BandsContainer extends Component {
  state = { name: "" };

  onSubmit = event => {
    event.preventDefault();
    // let name = event.target[0].value
    this.props.dispatch({ type: "ADD_BAND", band: this.state.name }); 
  };

  onTextChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <BandInput onSubmit={this.onSubmit} />
        <BandList />
      </div>
    );
  }
}

export default connect()(BandsContainer)
