export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case 'ADD_BAND':

      if (action.newBand) {
        console.log('in reducer, state', state);
        console.log('in reducer, action', action)
      }
      //state.concat(action.band) //! error: is not a function
      return state

    default:
      return state;
  }


  //.concat(action.band)
  return state

};
