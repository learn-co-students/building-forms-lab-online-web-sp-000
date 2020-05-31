import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <h1>Band List</h1>
        <ul>
          {this.props.bands.map( (band, index) => {
            return <li key={index}>{band.name}</li>
          })}
        </ul>
      </div>
      
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})
const mapDispatchToProps = dispatch => ({addBand: band => dispatch({type: 'ADD_BAND', band})})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
