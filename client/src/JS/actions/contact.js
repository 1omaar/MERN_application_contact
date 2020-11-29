import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
} from "../Constants/contacts";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS });
  try {
    const result = await axios.get("/api/contact/");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
  }
};
