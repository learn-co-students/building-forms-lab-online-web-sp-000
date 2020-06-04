export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case 'ADD_BAND':

      if (action.newBand) {
        console.log(state);
        console.log('in reducer', action)
      }
      //state.concat(action.band) //! is not a function
      return state

    default:
      return state;
  }


  //.concat(action.band)
  return state

};
