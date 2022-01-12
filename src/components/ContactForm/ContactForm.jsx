import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.scss';
import { addContact } from '../../redux/contacts/contacts-operations.js';
import { getContacts } from '../../redux/contacts/contacts-selectors';

const ContactForm = ({ onSubmitForm, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitContactForm = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() &&
          number === contact.phone,
      )
    )
      return toast.warn(
        `Contact ${name} with the ${number} already exists!!!`,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        },
      );

    onSubmitForm(makeContact(name, number));
    setName('');
    setNumber('');
  };

  const onFormInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const makeContact = (name, number) => {
    const newContact = {
      name,
      phone: number,
    };
    return newContact;
  };

  const genIdNumber = shortId.generate();
  const genIdName = shortId.generate();

  return (
    <>
      <form className={s.contactForm} onSubmit={onSubmitContactForm}>
        <label className={s.contactLabel} htmlFor={genIdName}>
          Name
        </label>
        <input
          id={genIdName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. 
  Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.contactInput}
          onChange={onFormInputChange}
        />
        <label className={s.contactLabel} htmlFor={genIdNumber}>
          Number
        </label>
        <input
          id={genIdNumber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={s.contactInput}
          onChange={onFormInputChange}
        />
        <button className={s.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
      <ToastContainer />
    </>
  );
};
ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
