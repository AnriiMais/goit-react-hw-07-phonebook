import { postContact } from '../../apiService/apiService';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

export const addContact = () => async dispatch => {
  dispatch(addContactsRequest());
  try {
    const newContact = await postContact();
    dispatch(addContactsSuccess(newContact));
    console.log('newContact :>> ', newContact);
  } catch (error) {
    dispatch(addContactsError(error.message));
    console.log('error :>> ', error);
  }
};
