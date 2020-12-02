import axios from "axios";
import {
  GET_CONTACT,
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  UPDATE_CONTACT,
} from "../Constants/contacts";

export const getContacts = (s) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS });
  try {
    const result = await axios.get(`/api/contact/name/?a=${s}`);
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.message });
    console.log(error.message);
  }
};
export const deleteContact = (id, s) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getContacts(s));
  } catch (error) {
    console.log(error);
  }
};
export const getContact = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};
export const postContact = (user, s) => async (dispatch) => {
  try {
    await axios.post(`/api/contact/`, user);
    dispatch(getContacts(s));
  } catch (error) {
    console.log(error);
  }
};

export const putContact = (user, id, s) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/contact/${id}`, user);
    dispatch({ type: UPDATE_CONTACT, payload: result.data.message });
    dispatch(getContacts(s));
  } catch (error) {
    console.log(error);
  }
};
