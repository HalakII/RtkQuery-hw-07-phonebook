import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactsList } from './ContactsList/ContactsList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';
import css from './App.module.css';

import { useGetContactsQuery } from '../redux/services';

export const App = () => {
  const { error: fetchError, isLoading: isFetchLoading } = useGetContactsQuery;

  return (
    <div className={css.wrapper}>
      <NotificationContainer />
      <SectionTitle title="Phonebook" />
      <ContactForm />
      <SectionSubtitle subtitle="Contacts" />
      <ContactsFilter />
      {isFetchLoading && !fetchError && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
};
