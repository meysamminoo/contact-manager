import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <section className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          onRemove={() => onRemove(contact.id)}
        />
      ))}
    </section>
  );
};

export default ContactList;
