import {
  deleteContactById,
  fetchContacts,
  postContact,
} from '../../apiService/apiService';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const fetchedContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await fetchContacts;
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    fetchContactsError(error.message);
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());
  try {
    const { data } = await postContact('', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

export const deleteContactFromData = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    const { data } = await deleteContactById(id);
    console.log('data :>> ', data);
    dispatch(deleteContactSuccess(data));
  } catch (error) {
    dispatch(deleteContactError());
  }
};
