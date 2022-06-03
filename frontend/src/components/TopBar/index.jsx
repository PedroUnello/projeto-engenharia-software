import './style.css';
import {
  Container,
  Navbar,
  Button,
  Image,
  Offcanvas,
  Toast,
} from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TopBar({ content, isLogged }) {
  const [notification, setNotification] = useState(false);
  const showNotification = () => {
    setNotification(true);
  };
  const hideNotification = () => {
    setNotification(false);
  };

  return (
    <Navbar id="background">
      <Navbar.Brand>
        <img src={'/imgs/logo.png'} alt="BurnDown" style={{ height: 120 }} />
      </Navbar.Brand>
      <Container fluid>{content}</Container>
      {isLogged ? (
        <>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="transparent" onClick={showNotification}>
              <Image src="/imgs/notification.png"></Image>
            </Button>
            <Image
              roundedCircle
              style={{ height: 120 }}
              src="/imgs/c.png"
            ></Image>
          </Navbar.Collapse>

          <Offcanvas
            show={notification}
            onHide={hideNotification}
            placement="end"
            style={{ background: '#2C394B' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ color: 'lightgray' }}>
                Notifications <div id="notificationCounter">1</div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ color: 'lightgray' }}>
              <Toast bg="secondary">
                <Toast.Header>
                  <img
                    src="/imgs/logo.png"
                    style={{ width: 20, height: 20 }}
                    className="rounded me-2"
                    alt="logo"
                  />
                  <strong className="me-auto">Nova Tarefa!</strong>
                  <small>1 hora atrás</small>
                </Toast.Header>
                <Toast.Body>
                  Uma nova tarefa foi adicionada em ProjetoUm.
                </Toast.Body>
              </Toast>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <div style={{ marginRight: 80 }}>
            <Link
              style={{
                textDecoration: 'underline',
                color: 'white',
              }}
              to="/login"
            >
              <Button
                className="border-white"
                variant="transparent"
                style={{ color: 'white', margin: 3 }}
              >
                Login
              </Button>
            </Link>
            <Link
              style={{
                textDecoration: 'none',
                pointerEvents: 'click',
                color: 'white',
              }}
              to="/register"
            >
              <Button
                className="border-white"
                variant="transparent"
                style={{ color: 'white', margin: 3 }}
              >
                Register
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
export default TopBar;

TopBar.propTypes = {
  content: PropTypes.any,
  isLogged: PropTypes.bool.isRequired,
};
