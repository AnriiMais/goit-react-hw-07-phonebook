import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess.type]: (state, { payload }) => [...state, ...payload],
  [addContactsSuccess.type]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const filterReducer = createReducer('', {
  [filter.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest.type]: () => true,
  [fetchContactsSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,

  [addContactsRequest.type]: () => true,
  [addContactsSuccess.type]: () => false,
  [addContactsError.type]: () => false,

  [deleteContactRequest.type]: () => true,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,
});

const error = createReducer(null, {
  [fetchContactsRequest.type]: () => null,
  [fetchContactsError.type]: (_, { payload }) => payload,

  [addContactsRequest.type]: () => null,
  [addContactsError.type]: (_, { payload }) => payload,

  [deleteContactRequest.type]: () => null,
  [deleteContactError.type]: (_, { payload }) => payload,
});
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  error,
});
export default contactsReducer;
