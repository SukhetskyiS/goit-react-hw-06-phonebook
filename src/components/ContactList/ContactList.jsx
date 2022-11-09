import PropTypes from 'prop-types';

export function ContactList({ formContactsList, deleteContact }) {
  return (
    <ul>
      {formContactsList.map(item => (
        <li key={item.id}>
          <p className="contact-data">
            {item.name}: {item.number}
          </p>
          <button onClick={() => deleteContact(item.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  formContactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
