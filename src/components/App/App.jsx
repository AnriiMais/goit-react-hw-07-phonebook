import './App.scss';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = () => {
  return (
    <section className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className="contacts">Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};

export default App;
