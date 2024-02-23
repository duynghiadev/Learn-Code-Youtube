import { useDispatch } from 'react-redux';

import { deleteContact, toggleBlocked } from 'redux/operations';

import PropTypes from 'prop-types';

import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleToggle = () => dispatch(toggleBlocked(contact));

  return (
    <li className={css.item}>
      <p className={`${css.text} ${contact.blocked ? css.blocked : 'nonblocked'}`}>
        {contact.name}
      </p>
      <p className={`${css.text} ${contact.blocked ? css.blocked : 'nonblocked'}`}>
        {contact.number}
      </p>
      <div className={css.blockInfo}>
        <input type="checkbox" checked={contact.blocked} onChange={handleToggle} />
        <p>{contact.blocked ? 'UNBLOCK' : 'BLOCK'}</p>
      </div>
      <button
        className={`${css.btn} ${contact.blocked ? css.btnBlocked : 'btnNonBlocked'}`}
        type="button"
        onClick={handleDelete}
        value={contact.id}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    blocked: PropTypes.bool.isRequired,
  }),
};
