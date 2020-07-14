import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandCard from '../components/BandCard';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <BandCard band={band} key={id} />)

  render() {
    return(
      <div>
        {this.renderBands()}
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch(addBand(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
// export default connect(mapStateToProps)(BandsContainer)
