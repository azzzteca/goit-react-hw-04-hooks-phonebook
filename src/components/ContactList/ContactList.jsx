import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export function ContactList({ contacts, filter, deleteContact, children }) {
  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {!filter
          ? contacts.map(contact => (
              <li key={uuidv4()}>
                {contact.name} {contact.number}
                <button type="button" id={contact.id} onClick={deleteContact}>
                  Delete
                </button>
              </li>
            ))
          : contacts
              .filter(contact => contact.name.toLowerCase().includes(filter))
              .map(contact => (
                <li key={contact.id}>
                  {contact.name} {contact.number}
                  <button type="button" id={contact.id} onClick={deleteContact}>
                    Delete
                  </button>
                </li>
              ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
  children: PropTypes.node,
};
