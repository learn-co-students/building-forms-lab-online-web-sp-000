import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';
import { addBand } from '../actions/addBand';

class BandsContainer extends Component {

  handleSubmit = (e, name) => {
    e.preventDefault();
    this.props.addBand(name);
  }

  renderBands = () => {
    return this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.handleSubmit} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, { addBand })(BandsContainer)
