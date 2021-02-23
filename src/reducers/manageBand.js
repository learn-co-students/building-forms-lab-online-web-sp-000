export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newState = { ...state, bands: [...state.bands, action.payload] }
      return newState
    
    default:
      return state;
  }
};
