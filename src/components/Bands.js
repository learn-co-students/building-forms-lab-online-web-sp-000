import React from 'react'

export default class Bands extends React.Component {

    render() {
        let bands = this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

        return (
            <ul>
                {bands}
            </ul>
        )
    }

}
