import axios from 'axios';

axios.defaults.baseURL = 'https://61dc0035591c3a0017e1a642.mockapi.io/contacts';

export const fetchContacts = axios.get();
export const postContact = (endpoint = '', contact) => {
  return axios.post(endpoint, contact);
};
export const deleteContactById = id => {
  return axios.delete(`/${id}`);
};
