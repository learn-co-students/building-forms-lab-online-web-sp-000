export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case "ADD_BAND":
      console.log(`adding band ${action.band}`)
      console.log('returning new state')
      return { bands: [...state.bands, action.band] }
    default:
      return state
  }
  
};
