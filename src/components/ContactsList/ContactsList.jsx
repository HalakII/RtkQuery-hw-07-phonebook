import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import css from './ContactsList.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/services';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const { data = [] } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => deleteContact(id);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};
