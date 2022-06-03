import './style.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { v4 } from 'uuid';

function Login({ setToken, setUserLogin }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const submit = () => {
    setLogin((login) => ({
      ...login,
      ['email']: document.getElementsByName('email')[0].value,
      ['password']: document.getElementsByName('password')[0].value,
    }));

    for (let i of Object.values(JSON.parse(localStorage.getItem('login')))) {
      if (login.email === i.email && login.password === i.password) {
        setToken({ token: v4().toString() });
        setUserLogin({ email: i.email, password: i.password, name: i.name });
        navigate('/projetos');
        break;
      }
    }
  };

  return (
    <Container>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        id="card"
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <form className="vstack gap-3" id="login">
            <label htmlFor="User">Nome:</label>
            <input type="text" name="email" id="input" />
            <label htmlFor="Pass">Senha:</label>
            <input type="password" name="password" id="input" />
            <Button
              onMouseDown={submit}
              type="button"
              className="btn btn-primary"
              id="button"
            >
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setUserLogin: PropTypes.func.isRequired,
};
