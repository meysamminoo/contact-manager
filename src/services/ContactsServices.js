import http from "./httpServices";

export const getContacts = () => {
  return http.get("/contact");
};

export const getOneContacts = (id) => {
  return http.get(`/contact/${id}`);
};

export const deleteOneContact = (id) => {
  return http.delete(`/contact/${id}`);
};

export const addOneContact = (data) => {
  return http.post(`/contact`, data);
};

export const updatedContact = (id, data) => {
  return http.put(`/contact/${id}`, data);
};
