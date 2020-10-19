export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] } 
    default:
      return state;
  }
};

// It will need to respond to an action of type 'ADD_BAND' and correspondingly concatenate a new band each time the action is dispatched.