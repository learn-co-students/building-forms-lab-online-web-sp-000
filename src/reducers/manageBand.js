export default function manageBand(state = {
  bands: [],
}, action) {
  if (action.type === 'ADD_BAND') {
    return {
      bands: [...state.bands, { name: action.name }]
    }
  }
  return state
};
