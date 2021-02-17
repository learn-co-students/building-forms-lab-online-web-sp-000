export default function manageBand(state = {
  bands: []
}, action) {
	switch(action.type){
		case 'ADD_BAND':
			// debugger;
			console.log('ewdf')
			return {...state, bands: [...state.bands, action.band]};
			
  	default:
  		return state
	}
};
