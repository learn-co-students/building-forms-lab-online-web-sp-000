export default function manageBand(state = {
  bands: [],
}, action) {
  console.log('bands reducer', state, action)
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat(action.payload) };

    default:
      return state;
  }
};
