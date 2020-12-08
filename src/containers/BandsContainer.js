import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

	renderBands = () => (
		this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
	)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
				<ul>
					{this.renderBands()}
				</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return({
		bands: state.bands
	})
}

const addBand = band => {
	return {
		type: 'ADD_BAND',
		band: band
	}
}


export default connect(mapStateToProps, {addBand})(BandsContainer)
