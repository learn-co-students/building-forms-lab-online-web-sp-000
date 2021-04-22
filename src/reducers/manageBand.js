export default function manageBand(state = {
  bands: [],
}, action) {
  console.log('reached reducer')
  switch (action.type) {
    case 'ADD_BAND':
    console.log(state.bands.concat(action.payload))
      return { ...state,
        bands: state.bands.concat(action.payload) }

      default:
      return state
  }
};
