import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  FETCH_USER_SUCCESS,
  ADD_USER,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from "../constantes/action-type";
import isEmpty from "lodash/isEmpty"
export const REDIRECT = "REDIRECT";

const initialState = {
  authenticated: false,
  user: null,
  statut: null,
  listeUser:[]
}

// ================== REDIRECTION ================== //
export const redirectReducer = (state = {}, action) => {
  switch (action.type) {
    case REDIRECT:
      return { redirectTo: action.payload };
    default:
      return state;
  }
};
// ====================== STATUT ======================== //

export const statutReducer = (state = initialState, action = {}) => {
  
  switch (action.type) {
  
      case "PUTSTATUT":
      return {
        ...state,
        statut: action.statut
        
      };
   
    default:
      return state;
  }
}

// ====================== LOGIN ======================== //

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        authenticated: !isEmpty(action.user),
        
        
        user: action.user
      };
     
    default:
      return state;
  }
}

// ========================= REGISTER ========================== //

const userReducer = (state = initialState, action) => {

  switch (action.type) {
      case FETCH_USER_SUCCESS:
          return {
              ...state,
              listeUser: action.payload
          }
      case ADD_USER:
          return {
              ...state,
              listeUser: [action.payload, ...state.listeUser]
          }
      case UPDATE_USER_SUCCESS:
          return {
              ...state,
              listeUser: [action.payload, ...state.listeUser]
          }
      case DELETE_USER_SUCCESS:
          return {
              ...state,
              listeUser: [action.payload, ...state.listeUser]
          }
      default:
          return state
  }
}
export default userReducer



