export default function (state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'ADD_MODAL_ACTIVE':
      return {
        ...state,
        modalActive: action.payload,
      };
    case 'REMOVE_ITEM':
      let temp = state.basket.slice('');
      temp.splice(action.payload, 1);

      return {
        ...state,
        basket: temp,
      };
    default:
      return state;
  }
}
