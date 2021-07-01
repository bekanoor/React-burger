import { defaultState } from './store';

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        ...state,
        modalActive: action.payload,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        basket: [...state.basket, action.payload],
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
};
