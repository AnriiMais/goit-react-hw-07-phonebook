import axios from 'axios';

axios.defaults.baseURL = 'https://61dc0035591c3a0017e1a642.mockapi.io/contacts';

export const postContact = async (endpoint = '') => {
  const contact = {
    name: 'ARCADIY',
    phone: '937-99-92',
  };
  return await axios.post(endpoint, contact);
};
