import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
    console.log(this.props.bands)

    const {bands} = this.props 

    return(
      <div>
        <ul>
          {bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps)(BandsContainer)
