import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../actions/userAction';

const MyProfile = () => {
  const userState = useSelector((state) => state.userReducer);
  const { name, email } = userState;
  const [nameState, setNameState] = useState(name);
  const [emailState, setEmailState] = useState(email);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateProfile = (event) => {
    dispatch(
      updateUserProfile(
        { name: nameState, email: emailState, password },
        () => {
          alert('Profile Updated successfully');
        }
      )
    );
    event.preventDefault();
  };

  const resetDetails = () => {
    setNameState('');
    setEmailState('');
    setPassword('');
  };
  return (
    <div className="myProfileContainer">
      <form onSubmit={updateProfile}>
        <input
          type="text"
          placeholder="Name"
          value={nameState}
          onChange={(event) => setNameState(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={emailState}
          onChange={(event) => setEmailState(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          <button type="button" onClick={resetDetails}>
            Reset Profile
          </button>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
