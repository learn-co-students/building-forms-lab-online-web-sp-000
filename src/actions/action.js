export function addName(bands){

  console.log("action fired", bands)
  return {
    type: 'ADD_NAME',
    bands
  }
}
