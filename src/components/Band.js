// import { render } from 'enzyme'
import React, { Component } from 'react'

class Band extends Component {
    render(){
        return(
            <li>{this.props.band.name}</li>
        )
    }
}

export default Band