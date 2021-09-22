import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from '../Section/Section.jsx';
import { InputForm } from '../InputForm/InputForm.jsx';
import { Filter } from '../Filter/Filter.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import { useLocalStorage } from '../hooks/useLocalStoraje';
import s from './App.module.css';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
    { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
    { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleAddContact = evt => {
    evt.preventDefault();

    const doubleContact = contacts.find(
      contact =>
        evt.target.elements[0].value.toLowerCase() ===
        contact.name.toLowerCase(),
    );

    if (!doubleContact) {
      const newContact = {
        id: uuidv4(),
        name: evt.target.elements.name.value,
        number: evt.target.elements.number.value,
      };

      setContacts(prevState => [...prevState, newContact]);
    } else {
      alert(doubleContact.name + 'is alredy in contacts');
    }

    evt.target.elements[0].value = '';
    evt.target.elements[1].value = '';
  };

  const handleFilterContact = evt => {
    evt.preventDefault();

    setFilter(evt.target.value.toLowerCase());
  };

  const handleDeleteContact = evt => {
    const arrayWithoutDeletedContact = contacts.filter(contact => {
      return contact.id !== evt.target.id;
    });

    setContacts([...arrayWithoutDeletedContact]);
  };

  return (
    <div className={s.app}>
      <Section title={'Phonebook'}>
        <InputForm addContact={handleAddContact} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={handleDeleteContact}
        >
          {contacts.length > 2 && (
            <Filter contacts={contacts} filterContact={handleFilterContact} />
          )}
        </ContactList>
      </Section>
    </div>
  );
}
