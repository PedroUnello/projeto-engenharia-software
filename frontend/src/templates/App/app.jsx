import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import useLogin from '../../hooks/useLogin';

import Home from '../Home/home';
import Projeto from '../Project/project';
import Projetos from '../Projects/projects';
import Login from '../Login/login';
import Cadastro from '../Register/register';
import Page404 from '../Page404/page404';
import TopBar from '../../components/TopBar';

const NoLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
};

function App() {
  const { token, setToken } = useToken();
  //Local Logins
  const { login, setLogin } = useLogin();
  const [content, setContent] = useState();

  const defineTopBar = useCallback(
    (content) => {
      setContent(content);
    },
    [setContent],
  );

  return (
    <>
      <TopBar isLogged={!!token} content={content} />

      {token ? (
        <Routes>
          <Route
            path="/projetos"
            element={
              <Projetos setContent={defineTopBar} user={login} token={token} />
            }
          />
          <Route
            path="/projetos/:projectId"
            element={
              <Projeto
                setContent={defineTopBar}
                isAdmin={true}
                user={login}
                token={token}
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUserLogin={setLogin} />}
          />
          <Route path="/register" element={<Cadastro />} />
          <Route path="*" element={<NoLogin />} />
        </Routes>
      )}
    </>
  );
}
export default App;
