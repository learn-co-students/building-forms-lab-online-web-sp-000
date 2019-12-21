export default function manageBand(state = {
  bands: [],
}, action) {
  // debugger
  switch (action.type){
    case "ADD_BAND":
      console.log("The Bands Name Being Added Is: " + action.band.name)
      debugger
      return state = {
        bands: state.bands.concat(action.band)
      }

    default:
      return state
  }
};
