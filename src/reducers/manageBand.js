export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      const something = {...state, bands: [...state.bands, action.band]}
      debugger
      return something
      // return band: Object.assign({}, ...state.band, action.band)
    default:
      return state
  }
};
