export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      const band = action.band;
      return state.concat(band);
    default:
      return state;
  }
}
