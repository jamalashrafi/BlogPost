import axios from 'axios';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from '../constants/UserConstants';

export const loginUser = (loginReqObj, callback) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  try {
    const { data } = await axios.post(
      `http://localhost:5000/login`,
      loginReqObj
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.user.name);
    localStorage.setItem('email', data.user.email);
    callback(true);
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR, payload: error });
    callback(false);
  }
};

export const registerUser = (registerReqObj, callback) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const { data } = await axios.post(
      `http://localhost:5000/register`,
      registerReqObj
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    localStorage.setItem('token', data.token);
    callback(true);
  } catch (error) {
    dispatch({ type: REGISTER_USER_ERROR, payload: error });
    callback(false);
  }
};

export const logout = (api, callback) => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch({ type: LOGOUT_USER_REQUEST });

  try {
    const { data } = await axios.get(`http://localhost:5000/${api}`, {
      headers: { Authorization: token },
    });

    dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.user });
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    callback(true);
  } catch (error) {
    dispatch({ type: LOGOUT_USER_ERROR, payload: error });
  }
};

export const updateUserProfile = (updateReqObj, callback) => async (
  dispatch
) => {
  const token = localStorage.getItem('token');
  dispatch({ type: UPDATE_USER_REQUEST });

  try {
    const { data } = await axios.patch(`/updateProfile`, updateReqObj, {
      headers: { Authorization: token },
    });
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    callback();
  } catch (error) {
    dispatch({ type: UPDATE_USER_ERROR, payload: error });
  }
};
