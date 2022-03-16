import { useEffect, useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import axios from "axios";

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

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
    const getContacts = async () => {
      const { data } = await axios.get("http://localhost:3500/contact");
      setContacts(data);
    };

    getContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={<ContactList contacts={contacts} onRemove={removeHandler} />}
        />
        <Route path="/user/:id" element={<ContactDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
