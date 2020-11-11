import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer store={this.props.store}/>
      </div>
    );
  }
};

export default App;
