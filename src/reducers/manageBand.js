export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band]}
      // reducers take in state + action to return a new global state for components to use
      // should concatenate a new band each time the action is dispatched -- ??
      
      default:
      return state;
  }

}
