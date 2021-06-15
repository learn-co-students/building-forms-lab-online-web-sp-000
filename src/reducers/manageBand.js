export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band]}
      // return { bands: state.bands.concat(action.payload.name)};

    default:
      return state;
  }
};
