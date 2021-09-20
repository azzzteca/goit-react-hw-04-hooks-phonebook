import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ contacts, filterContact }) {
  const moreTwoContacts = contacts.length > 2;
  return (
    moreTwoContacts && (
      <label>
        Find contacts by name
        <input type="text" onChange={filterContact} />
      </label>
    )
  );
}

Filter.propTypes = {
  info: PropTypes.shape({
    contacts: PropTypes.array,
  }),
  filterContact: PropTypes.func.isRequired,
};
