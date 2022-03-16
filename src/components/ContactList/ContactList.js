import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <section className={styles.contactList}>
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onRemove={() => onRemove(contact.id)}
        />
      ))}
    </section>
  );
};

export default ContactList;
