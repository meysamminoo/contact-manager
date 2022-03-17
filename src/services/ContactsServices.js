import http from "./httpServices";

export const getContacts = () => {
  return http.get("/contact");
};

export const deleteOneContact = (id) => {
  return http.delete(`/contact/${id}`);
};

export const addOneContact = (data) => {
  return http.post(`/contact`, data);
};
