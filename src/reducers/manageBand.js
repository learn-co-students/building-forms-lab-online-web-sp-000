export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      console.log(action)
      bands.concatenate(action) 
  }
  return state
};
