import { useSelector } from 'react-redux';

import Contact from 'components/contact/Contact';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/selectors';

import PropTypes from 'prop-types';

import css from './Contacts.module.css';

export default function Contacts({ children }) {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContactsList = useSelector(selectVisibleContacts);

  return (
    <div className={css.contacts}>
      {children}
      {isLoading && !error && <b>Request in progress...</b>}
      <ul className={css.list}>
        {filteredContactsList.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  children: PropTypes.element,
};
