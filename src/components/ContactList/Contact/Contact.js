import styles from "./Contact.module.css";
import userImage from "../../../assets/images/user.png";
import { Link, useParams } from "react-router-dom";

const Contact = ({ contact, onRemove }) => {
  const { name, email, id } = contact;

  return (
    <div className={styles.contact}>
      <div className={styles.contactDetail}>
        <img src={userImage} alt="avatar-user" />

        <Link to={`/user/${id}`} state={{ contact }}>
          <div className={styles.textBox}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`} state={{ contact }}>
          <button className={styles.edit}>Edit</button>
        </Link>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Contact;
