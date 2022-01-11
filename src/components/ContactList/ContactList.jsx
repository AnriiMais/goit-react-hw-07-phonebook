import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
import { deleteContact } from '../../redux/contacts/contacts-actions';

const ContactList = ({ queryList, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {queryList.map(({ id, name, number }) => (
        <div className={s.contactWrap} key={id}>
          <li className={s.contact}>
            {name}:<span className={s.contactNumber}>{number}</span>
          </li>
          <button
            className={s.btnDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  queryList: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const filterNormalized = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized),
  );
  return {
    queryList: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
