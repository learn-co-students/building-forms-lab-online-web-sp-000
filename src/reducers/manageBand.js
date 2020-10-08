export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      const band = action.band;
      const newBands = { ...state };
      newBands.bands = state.bands.concat(band);
      debugger;
      return newBands;
    default:
      return state;
  }
}
