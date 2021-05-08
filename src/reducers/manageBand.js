//updates state 
export default function manageBand(
  state = {
    bands: [],
  }, action) {
    switch (action.type) {
      case 'ADD_BAND':
        console.log({
          bands: state.bands.concat(action.payload.text)
        });

    return { todos:
      state.todos.concat(action.payload.text) };

    default: 
    return state;
    }
};
