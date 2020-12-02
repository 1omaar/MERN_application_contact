// import constants
import {
  GET_CONTACT,
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  UPDATE_CONTACT,
} from "../Constants/contacts";
// initialState

const initialstate = {
  contact: [],
  loadContacts: false,
  errors: null,
  user: {},
  editContact: "",
};

export const contactReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contact: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
    case GET_CONTACT:
      return { ...state, user: payload };
    case UPDATE_CONTACT:
      return { ...state, editContact: payload };
    default:
      return state;
  }
};
