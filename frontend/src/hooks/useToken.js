import { useState } from 'react';

function useToken() {
  const getToken = () => JSON.parse(sessionStorage.getItem('token'))?.token;
  const saveToken = (Token) => {
    sessionStorage.setItem('token', JSON.stringify(Token));
    setToken(Token.token);
  };
  const [token, setToken] = useState(getToken());
  return {
    setToken: saveToken,
    token,
  };
}
export default useToken;
