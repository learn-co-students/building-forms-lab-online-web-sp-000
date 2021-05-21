import {v4 as uuidv4} from 'uuid'


export default function manageBand(state = {
  bands: [],
}, action) {

switch(action.type){
  case "ADD_BAND":
    action.band.id = uuidv4();
    return {bands: [ ...state.bands, action.band ]}
    default:
      return state;
}

 
};
