export default function manageBand(state = {
  bands: [],
}, action) {
  console.log("state: ", state, "action: ", action)

  switch(action.type) {

    case 'ADD_BAND': 
        return { ...state, bands: [...state.bands, action.band] }

    default: 
      return state
  }
};
