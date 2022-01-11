import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { add, deleteContact, filter } from './contacts-actions';
import data from '../../data.json';

const addReducerFunc = (state, { payload }) => {
  const { name, number } = payload;
  if (
    state.every(
      contact =>
        contact.name.toLowerCase() !== name.toLowerCase() &&
        number !== contact.number,
    )
  ) {
    return [...state, payload];
  } else alert(`${name} contact with the ${number} already exists!!!`);
  return state;
};
const itemsReducer = createReducer([...data], {
  [add.type]: addReducerFunc,
  [deleteContact.type]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filter.type]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
