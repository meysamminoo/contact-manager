import { useState } from "react";
import styles from "./AddContact.module.css";
import { useNavigate } from "react-router-dom";
import { addOneContact } from "../../services/ContactsServices";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const clickHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    if (!contact.name || !contact.email) {
      alert(" Please, fill in the feilds");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.formControl}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={clickHandler}
        />
      </div>
      <div className={styles.formControl}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={clickHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
