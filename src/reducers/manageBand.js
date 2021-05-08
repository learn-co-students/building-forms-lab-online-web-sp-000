//updates state 
export default function manageBand(
  state = {
    bands: [],
  }, action) {
    //don't forget to use a separater to add band to bands 
    switch (action.type) {
      case 'ADD_BAND':
        return { ...state,
          bands: [...state.bands, action.band] }
          default: 
            return state;
        }
};
