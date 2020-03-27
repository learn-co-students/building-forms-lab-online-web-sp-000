import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
    render() {
        return(
        <div>
            <BandInput addBand={this.props.addBand} />
            <Bands bands={this.props.bands}/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bands: state.bands
    }
}

// first attempt:
// const mapDispatchToProps = dispatch => {
//     return {
//         addBand: () => {
//             dispatch({
//                 type: "ADD_BAND",
//                 band
//             })
//         }
//     }
// }

// solution:
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

/*
This component acts as your connection to the Redux store
and should be a child of the App component.

Any values you want to use from Redux as well as any actions
you want to dispatch should be set up and available in BandsContainer
so they can be passed down to other components.
*/
