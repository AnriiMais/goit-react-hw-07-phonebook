import { createAction } from '@reduxjs/toolkit';

const add = createAction('contacts/add');
const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const deleteContact = createAction('contacts/delete');
const filter = createAction('contacts/filter');
export {
  add,
  deleteContact,
  filter,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
