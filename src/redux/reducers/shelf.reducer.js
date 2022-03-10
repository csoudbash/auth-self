import { combineReducers } from 'redux';

const shelfReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF':
      return action.payload;
    case 'UNSET_SHELF':
      return [];
    default:
      return state;
  }
};

const shelfItem = (state = [], action) => {
    switch (action.type) {
      case 'SET_NEW_SHELF_ITEM':
        return action.payload;
      default:
        return state;
    }
  };

export default combineReducers({
    shelfReducer,
    shelfItem,
});
