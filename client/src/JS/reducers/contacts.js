// import constants
import {
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
} from "../Constants/contacts";
// initialState

const initialstate = {
  contact: [],
  loadContacts: false,
  errors: null,
};

export const contactReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contact: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
    default:
      return state;
  }
};
