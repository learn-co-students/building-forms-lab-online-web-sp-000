export default function manageBand(state = {
  bands: [],
}, action) {

  switch(action.type) {
    case "ADD_BAND":
      // console.log(...state.bands.concat(action.band))
      return [...state.bands.concat(action.band)]
    // case ".":
    //   return state
    default:
      return state;
  }
  
};
