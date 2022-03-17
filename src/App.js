import { useEffect, useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import {
  getContacts,
  deleteOneContact,
  addOneContact,
} from "./services/ContactsServices";
function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  const removeHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };

    try {
      fetchContacts();
    } catch (error) {}
  }, []);

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
