import { useState, useEffect } from "react";
import styles from "./EditContact.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getOneContacts } from "../../services/ContactsServices";

const EditContact = ({ editContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const getID = location.state.contact.id;

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContacts(getID);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };

    localFetch();
  }, []);

  const clickHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    if (!contact.name || !contact.email) {
      alert(" Please, fill in the feilds");
      return;
    }
    e.preventDefault();
    editContactHandler(getID, contact);
    setContact({ name: "", email: "" });
    navigate("/");
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

export default EditContact;
