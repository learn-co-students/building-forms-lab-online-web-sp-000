import React, { Component } from 'react'
import { connect } from 'react-redux';
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band} />);
  
  render() {
    debugger
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};

export default connect(mapStateToProps)(BandsContainer);
