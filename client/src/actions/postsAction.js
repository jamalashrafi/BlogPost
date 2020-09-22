import axios from 'axios';
import {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_ERROR,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from '../constants/PostsConstants';

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_POSTS_REQUEST });

  try {
    const { data } = await axios.get('http://localhost:5000/posts');
    dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_POSTS_ERROR, payload: error });
  }
};

export const fetchMyPosts = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch({ type: FETCH_USER_POSTS_REQUEST });

  try {
    const { data } = await axios.get('http://localhost:5000/userposts', {
      headers: { Authorization: token },
    });
    dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USER_POSTS_ERROR, payload: error });
  }
};

export const createPost = (description, callback) => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const { data } = await axios.post(
      'http://localhost:5000/createPost',
      { description },
      { headers: { Authorization: token } }
    );
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    callback();
  } catch (error) {
    dispatch({ type: CREATE_POST_ERROR, payload: error });
  }
};
