import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from './form/Form';
import Filter from './filter/Filter';
import Section from './sections/Section';
import Contacts from './contacts/Contacts';
import { fetchContacts } from 'redux/operations';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phoneBook}>Phonebook</h1>
      <div className={css.phoneBook__options}>
        <Section title="Add Contact">
          <Form />
        </Section>

        <Section title="Contacts">
          <Contacts>
            <Filter />
          </Contacts>
        </Section>
      </div>
    </div>
  );
}
