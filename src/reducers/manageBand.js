export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    console.log(action.payload)
      /*Return a copy of the rest of the state, but specifically change the part of state that includes the bands key/value pair. To update the bands array, make a copy of it and pass in the band which we just submitted via form */
      return {...state, bands: [...state.bands, action.payload]};

    default:
      return state
  }
}
