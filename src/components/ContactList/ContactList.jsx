import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
import {
  deleteContactFromData,
  fetchedContacts,
} from '../../redux/contacts/contacts-operations';
import {
  getError,
  getFilteredContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors.js';
import Loader from '../Loader';

const ContactList = () => {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const queryList = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedContacts());
    // setContacts();
  }, [dispatch]);
  return (
    <>
      {loading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul className={s.contactList}>
        {queryList.map(({ id, name, phone }) => (
          <div className={s.contactWrap} key={id}>
            <li className={s.contact}>
              {name}:<span className={s.contactNumber}>{phone}</span>
            </li>
            <button
              className={s.btnDelete}
              type="button"
              onClick={() => {
                dispatch(deleteContactFromData(id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   queryList: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
//   ).isRequired,
// };

// const mapStateToProps = state => ({
//   queryList: getFilteredContacts(state),
//   loading: getLoading(state),
//   error: getError(state),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContactFromData: id => dispatch(deleteContactFromData(id)),
//   setContacts: () => dispatch(fetchedContacts()),
// });

export default ContactList;
