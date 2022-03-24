import { useState, useEffect } from "react";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { Link } from "react-router-dom";
import { deleteOneContact, getContacts } from "../../services/ContactsServices";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSerchTerm] = useState("");

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

  const seachHandler = (e) => {
    setSerchTerm(e.target.value);
  };

  return (
    <section className={styles.contactList}>
      <div className={styles.head}>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
        <div>
          <input type="text" value={searchTerm} onChange={seachHandler} />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onRemove={removeHandler} />
      ))}
    </section>
  );
};

export default ContactList;
