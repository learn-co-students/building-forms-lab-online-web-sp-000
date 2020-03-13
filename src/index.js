import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

const store = createStore(manageBand)

//Now i will know that there's been a change in my state
//Then I will rerender this evil react app arggg... 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//But wait, i just let every component in the whole app know about every change in state!!!!!
//lets go to bandinput and fix this issue, we'll have a talk with him, ha ha ha....