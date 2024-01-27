import css from './ContactForm.module.css';
import { NotificationManager } from 'react-notifications';

import { RiContactsBook2Line } from 'react-icons/ri';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/services';

import { useRef } from 'react';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const inputForm = useRef();

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
    const objUserData = Object.fromEntries(new FormData(inputForm.current));

    console.log(objUserData);

    const contactExists = data.map(contact => contact.name.toLowerCase());

    if (contactExists.includes(objUserData.name.toLowerCase())) {
      NotificationManager.info(`${objUserData.name} is already in contacts.`);
      return;
    }
    addContact(objUserData);
    inputForm.current.reset();
  };

  return (
    <form ref={inputForm} className={css.form_wrapper} onSubmit={handleSubmit}>
      <RiContactsBook2Line className={css.iconContact} />
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};
