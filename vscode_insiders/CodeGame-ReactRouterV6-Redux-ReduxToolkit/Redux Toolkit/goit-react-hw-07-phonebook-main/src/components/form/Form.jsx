import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import css from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSumbit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name,
      number,
      blocked: false,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name.toUpperCase() === newContact.name.toUpperCase())) {
      return Notiflix.Notify.failure(`Contact ${newContact.name} already exist on list`);
    } else {
      dispatch(addContact(newContact));
    }

    form.reset();
  };

  return (
    <form onSubmit={handleSumbit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
