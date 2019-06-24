// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.addBand(this.state);
	};

  render() {
    return(
      <div>

       	<form onSubmit={event => this.handleSubmit(event)}>
					<p>
						<label>Add Band</label>
						<input
							type="text"
							onChange={this.handleChange}
							value={this.state.name}
						/>
					</p>
					<input type="submit" value="Submit"/>
				</form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return {
		addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
	};
};

export default BandInput
