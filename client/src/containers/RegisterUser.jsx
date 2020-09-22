import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';

const RegisterUser = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const registerObj = { name, email, password };
    dispatch(registerUser(registerObj, resp => {
      if(resp)
        props.history.push('/login');
      else
         alert('Registration failed')}));
    event.preventDefault();
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginContainer__loginForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
