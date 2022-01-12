import { createSelector } from '@reduxjs/toolkit';

const getFilterValue = state => state.contacts.filter;
const getError = state => state.contacts.error;
const getLoading = state => state.contacts.loading;
const getContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getFilterValue, getContacts],
  (filter, contacts) => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized),
    );
  },
);

export {
  getFilterValue,
  getError,
  getLoading,
  getContacts,
  getFilteredContacts,
};
