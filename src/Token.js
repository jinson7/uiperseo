import { useState } from 'react';

export default function Token() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const deleteToken = () => {
    console.log("DELETE");
    localStorage.removeItem('token');
    setToken(undefined);
  };

  return {
    setToken: saveToken,
    delToken: deleteToken,
    token
  }
}