export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      let newBand = {name: action.name}
      let newBands = state.bands.slice()
      newBands.push(newBand)
      return {bands: newBands}

    default:
      return state
  }
};
