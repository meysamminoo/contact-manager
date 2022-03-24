import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </Layout>
  );
}

export default App;
