import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bands extends Component {

  render() {
    console.log(this.props.bands);
    const bands = this.props.bands.map((band,idx) => {
         return <li key={idx}>{band.name}</li>
    });

    return (
      <div>
          {bands}
      </div>
    );
  }
};

//const mapStateToProps = state => {
//  return { bands: state.bands }
//}
//export default connect(mapStateToProps)(Bands);

export default Bands;