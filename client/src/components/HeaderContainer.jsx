import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userAction';
import createHistory from '../util/history';

const HeaderContainer = (props) => {
  const userState = useSelector((state) => state.userReducer);
  const { auth } = userState;
  const dispatch = useDispatch();
  const renderLogin = (path) => {
    createHistory.push(path);
  };

  const logoutUser = (api) => {
    dispatch(
      logout(api, (resp) => {
        if (resp) props.history.push('/logout');
        else alert('logout failed');
      })
    );
  };

  return (
    <div className="headerContainer">
      <label>The Blogger's Post...</label>

      {!auth ? (
        <>
          <button onClick={() => renderLogin('/login')}>Login</button> |{' '}
          <button onClick={() => renderLogin('/register')}>Register</button>
        </>
      ) : (
        <>
          <button onClick={() => logoutUser('logout')}>Logout</button> |{' '}
          <button onClick={() => logoutUser('logoutAll')}> LogoutAll </button>
        </>
      )}
    </div>
  );
};

export default HeaderContainer;
