export default function manageBand(state = {
  bands: [],
}, action) {
	 switch (action.type) {

    case 'ADD_BAND':
    
	  const band = { name: action.payload };

	  return { 	 bands: state.bands.concat(band) };

    default:
      return state;
  }
};
