import styles from "./Contact.module.css";
import userImage from "../../assets/images/user.png";

const Contact = ({ name, email, onRemove }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactDetail}>
        <img src={userImage} alt="avatar-user" />
        <div className={styles.textBox}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Contact;
