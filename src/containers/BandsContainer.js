import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import BandList from "../components/BandList";

class BandsContainer extends Component {
  state = { name: "" };

  onSubmit = event => {
    event.preventDefault();
    // This line below throws an unknown error ("Reach doesn't know what it was")
    // let name = event.target[0].value
    const x = this;
    this.props.dispatch({ type: "ADD_BAND", band: this.state.name });
  };

  onTextChange = e => {
    // let x = this
    this.setState({ name: e.target.value }, () => {
      let text = this.state.name;
      console.log(text);
    });
  };

  render() {
    return (
      <div>
        <BandInput onSubmit={this.onSubmit} onChange={this.onTextChange} text={this.state.text} />
        <BandList />
      </div>
    );
  }
}

export default connect()(BandsContainer);
