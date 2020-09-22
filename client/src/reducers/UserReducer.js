import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
} from '../constants/UserConstants';

const initialState = {
  name: '',
  email: '',
  password: '',
  auth: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        success: true,
        loading: false,
      };

    case REGISTER_USER_ERROR:
      return { ...state, error: action.payload, loading: false };

    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.user.name,
        email: action.payload.user.email,
        auth: action.payload.token,
        success: true,
        loading: false,
      };

    case LOGIN_USER_ERROR:
      return { ...state, error: action.payload, loading: false };

    case LOGOUT_USER_SUCCESS:
      return { ...state, name: '', email: '', auth: '' };

    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        success: true,
        loading: false,
      };

    case UPDATE_USER_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
