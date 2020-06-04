export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case 'ADD_BAND':
      // console.log('in reducer, state', state);
      // console.log('in reducer, action', action)
      //state.concat(action.band) 
      console.log('reducer return', {...state, bands: [...state.bands, action.band]})
      return {...state, bands: [...state.bands, action.band]}

    default:
      return state;
  }

};
