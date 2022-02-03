import { Component } from "react/cjs/react.production.min";
import "./App.css";
import styles from "./App.module.scss";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (interaction) => {
    const searchName = this.state.contacts
      .map((contact) => contact.name)
      .includes(interaction.name);

    if (searchName) {
      alert(`${interaction.name} is already in contacts`);
    } else {
      const contact = {
        ...interaction,
        id: nanoid(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (Id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== Id),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const Contacts = this.getContacts();

    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />

        <ContactList contacts={Contacts} onRemoveContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
