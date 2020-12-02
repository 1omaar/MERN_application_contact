import { TOGGLE_ADD_TRUE, TOGGLE_ADD_FALSE } from "../Constants/add";

 const initialState = {
  add: false,
};

export const addAndEditReducer = (
  state = initialState,
  { type }
) => {
    switch (type) {
        case TOGGLE_ADD_FALSE:return{...state,add:false}
            
        case TOGGLE_ADD_TRUE:return{...state,add:true}
    
        default: return state
            
    }
};
