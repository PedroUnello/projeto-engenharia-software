import './style.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [error, setError] = useState();
  const [login, setLogin] = useState({ email: '', name: '', password: '' });
  const [confPass, setConfPass] = useState('');
  const navigate = useNavigate();
  const readInput = (event) => {
    setLogin((login) => ({
      ...login,
      [event.target.name]: event.target.value,
    }));
    if (event.target.name == 'pass_test') {
      setConfPass(event.target.value);
    }
  };

  const submit = () => {
    /* Valores lidos */

    if (confPass == login.password) {
      setError(false);

      /* senhas iguais */
    } else {
      setError(true);
    }

    if (localStorage.getItem('login') !== null) {
      let values = Object.values(JSON.parse(localStorage.getItem('login')));
      values.push({
        email: login.email,
        password: login.password,
        name: login.name,
      });
      localStorage.setItem('login', JSON.stringify(values));
    } else {
      localStorage.setItem(
        'login',
        JSON.stringify({
          0: {
            email: login.email,
            password: login.password,
            name: login.name,
          },
        }),
      );
    }

    navigate('/login');
  };

  const testePassowrds = () => {
    setError(false);
  };

  return (
    <Container>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        id="card-cadastro"
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <form className="vstack gap-3" id="login">
            <label>E-mail</label>
            <input
              onChange={readInput}
              type="email"
              name="email"
              id="input"
              placeholder="E-mail:"
            />

            <label>Nome</label>
            <input
              onChange={readInput}
              type="text"
              name="name"
              id="input"
              placeholder="Nome:"
            />

            <label>Senha</label>
            <input
              onChange={readInput}
              onFocus={testePassowrds}
              type="password"
              name="password"
              id={`input${error ? '-error' : ''}`}
              placeholder="Senha:"
            />

            <label>Confirme sua Senha</label>
            <input
              onChange={readInput}
              onFocus={testePassowrds}
              type="password"
              name="pass_test"
              id={`input${error ? '-error' : ''}`}
              placeholder="Senha:"
            />

            <Button
              onClick={submit}
              type="button"
              variant="primary"
              id="button"
            >
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Cadastro;
