import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import './login.css';

/*
async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
*/
export default function Login({ setToken }) {
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    /*
    const token = await loginUser({
      username,
      password
    });
    */
   console.log(username, password);
    const token = {
      "token": "12345"
    }
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Login to Perseo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username" onChange={e => setUserName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};