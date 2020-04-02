export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      let b = {name: action.name}
      return(
        { bands: state.bands.concat(b)}
      )
    default:
      return state
  }
  return state
};
