// let state = {
//   numberOfPresents: 0,
// };

// let action = {
//   type: 'INCREASE'
// }

export function managePresents(state = {numberOfPresents: 0}, action) {
  switch(action.type){
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default: 
      return state;
  }
}
