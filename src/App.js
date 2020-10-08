import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App" key={this.state}>
        <BandsContainer />
      </div>
    );
  }
};

export default App;
