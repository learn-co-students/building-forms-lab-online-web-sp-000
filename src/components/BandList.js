
import React, {Component} from 'react';
import {connect} from 'react-redux'

class BandList extends Component  {
    
    render(){
        
        return(
            <div>
                <ul>
                    {this.props.bands.map(bandObject => <li>{bandObject.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {bands: state.bands}
}
  
export default connect(mapStateToProps)(BandList)