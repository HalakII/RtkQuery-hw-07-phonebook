import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactsList } from './ContactsList/ContactsList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <NotificationContainer />
      <SectionTitle title="Phonebook" />
      <ContactForm />
      <SectionSubtitle subtitle="Contacts" />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
