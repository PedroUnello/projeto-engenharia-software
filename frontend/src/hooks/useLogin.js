import { useState } from 'react';

function useLogin() {
  const getLogin = () => JSON.parse(sessionStorage.getItem('login'))?.token;
  const saveLogin = (Login) => {
    sessionStorage.setItem('login', JSON.stringify(Login));
    setLogin(Login.login);
  };
  const [login, setLogin] = useState(getLogin());
  return {
    setLogin: saveLogin,
    login,
  };
}
export default useLogin;
