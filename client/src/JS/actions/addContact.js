import { TOGGLE_ADD_FALSE, TOGGLE_ADD_TRUE } from "../Constants/add";

export const addContact = () => {
  return {
    type: TOGGLE_ADD_TRUE,
  };
};
export const editContact = () => {
  return {
    type: TOGGLE_ADD_FALSE,
  };
};
