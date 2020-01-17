const initialState = {
  bands: [],
}

const manageBand = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.name]}
    default:
      return state
  }
}

export default manageBand