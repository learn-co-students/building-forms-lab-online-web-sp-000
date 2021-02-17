import React, { Component } from 'react'

class Band  extends Component {
	render() {
		return (<li>{this.props.name}</li>)
	}
}

export default Band