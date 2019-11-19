import React from "react"

class BandInput extends React.Component {

	state = {
		name: ""
	}

	handleChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addBand(this.state);
		this.setState({
			name: ""
		});
	}

	render() {
		return (
				<form onSubmit={this.handleSubmit}>
					<label>
						{"Band name: "} 
						<input type="text"
									 placeholder="(add band name)"
									 value={this.state.name}
									 onChange={this.handleChange} />
					</label>
					{" "}
					<input type="submit" />
				</form>
		)
	}

}

export default BandInput
