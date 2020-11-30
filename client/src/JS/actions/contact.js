import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_ONECONTACT,
  GET_ONECONTACT_FAIL,
  GET_ONECONTACT_SUCCESS
} from "../Constants/contacts";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS });
  try {
    const result = await axios.get("/api/contact/");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.message });
  }
};
export const getOneContact = () => async(dispatch) =>{
  dispatch({type:GET_ONECONTACT})
  try {
    const result = await axios.get("/api/contact/:id")
    dispatch({ type:GET_ONECONTACT_SUCCESS, payload: result.data.message})
  } catch (error) {
    dispatch({type: GET_ONECONTACT_FAIL,payload:error.message})
  }
}
