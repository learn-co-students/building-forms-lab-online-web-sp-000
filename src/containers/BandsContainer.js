import React, { Component } from 'react'
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import BandList from "../components/BandList";

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
        <BandList />
      </div>
    )
  }
}

export default connect()(BandsContainer)
