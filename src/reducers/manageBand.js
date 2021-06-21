// export default function manageBand(state = {
//   bands: [],
// }, action) {
//   switch (action.type) {
//     case "ADD_BAND":
//       return { bands: state.bands.concat(action.band) }

//     default:
//       return state
//   }
// };

  
export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let store = { ...state, bands: [...state.bands, action.band] }
      debugger
      return store
    default:
      return state;
  }
};