import css from './ContactForm.module.css';
import { NotificationManager } from 'react-notifications';

import { RiContactsBook2Line } from 'react-icons/ri';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/services';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const handleSubmit = async evt => {
  //   evt.preventDefault();

  //   try {
  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };

  //     const result = await addContact(newContact).unwrap();

  //     console.log('Mutation success:', result);

  //     setName('');
  //     setNumber('');
  //   } catch (error) {

  //     console.error('Mutation error:', error);
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const contactExists = data.map(contact => contact.name.toLowerCase());
    if (contactExists.includes(newContact.name.toLowerCase())) {
      NotificationManager.info(`${newContact.name} is already in contacts.`);
      return;
    }
    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form_wrapper} onSubmit={handleSubmit}>
      <RiContactsBook2Line className={css.iconContact} />
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};
