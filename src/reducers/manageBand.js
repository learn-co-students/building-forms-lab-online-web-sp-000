export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // console.log([...state.bands, { name: action.name }])
      return {
        bands: [...state.bands, { name: action.name }]
      }
    default:
      return state;
  }
  
};
