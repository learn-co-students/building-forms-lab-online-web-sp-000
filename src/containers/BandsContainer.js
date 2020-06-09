import React, { Component } from 'react';
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';


//1.define as an action creator: type and data. Creates an action based on data, and returns it.
const addBandActionCreator = (bandObject) => {
  console.log(bandObject);
  console.log({type: "ADD_BAND", band: bandObject});
  return {type: "ADD_BAND", band: bandObject}
}



class BandsContainer extends Component {

//renderBands = (state) => state.bands.map((band) => <li>{band}</li>);

  render() {
//    console.log('here');
    return(
      <div>
        <div>
            <BandInput addBand={this.props.addBand}/>
        </div>
        <div>
            BandsContainer
              <Bands bands={this.props.bands}/>
        </div>
      </div>
    )
  }
}
//{this.renderBands()}



const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

//2. map the action creator to props. Dispatch always expects an object {type: , someData: }, and not even really someData.
const mapDispatchToProps = dispatch => {
  return {addBand: (stateObject) => dispatch(addBandActionCreator(stateObject))}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
//export default connect (BandsContainer);

// This component should act as your connection to the Redux store and should be a child of the App component. Any values we want to use from Redux as well as any actions we want to dispatch should be set up and available in BandsContainer so they can be passed down to other components.
