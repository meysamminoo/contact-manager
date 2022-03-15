import { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./Layout/Layout";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: Math.ceil(Math.random() * 100),
        name: contact.name,
        email: contact.email,
      },
    ]);
  };

  const removeHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <Layout>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onRemove={removeHandler} />
    </Layout>
  );
}

export default App;
