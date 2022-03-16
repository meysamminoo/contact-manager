import { Link, useLocation } from "react-router-dom";
const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  console.log(name, email);
  return (
    <div>
      <p>contact name is: {name}</p>
      <p>contact email is: {email}</p>
      <Link to="/">
        <button>Go to contact list</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
