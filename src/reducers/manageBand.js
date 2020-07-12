export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return [...state, action.bands]

    default:
      return state;
  }
};
