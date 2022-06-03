import './style.css';
import {
  Col,
  Row,
  Container,
  Button,
  Badge,
  Stack,
  Popover,
  Overlay,
} from 'react-bootstrap';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Card from '../../components/Card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import axios from 'axios';

function Projeto({ setContent, isAdmin }) {
  const ref = useRef(null);
  const [target, setTarget] = useState(null);
  const [inUserManagement, setUserManagement] = useState(false);

  const [userList] = useState([
    JSON.parse(sessionStorage.getItem('login')).name,
  ]);

  const [inCreation, setCreation] = useState({
    backlog: false,
    developing: false,
    finalizado: false,
  });
  const [inDelete, setDelete] = useState({
    backlog: false,
    developing: false,
    finalizado: false,
  });
  const [tasks] = useState({
    backlog: [
      {
        id: 0,
        descricao: 'Tarefa1',
        addedBy: JSON.parse(sessionStorage.getItem('login'))?.name,
      },
    ],
    developing: [],
    finalizado: [],
  });

  const userAddMode = useCallback(
    (event) => {
      setUserManagement(!inUserManagement);
      setTarget(event.target);
    },
    [setUserManagement, setTarget, inUserManagement],
  );

  useEffect(() => {
    let nome = 'None';
    axios
      .get('https://localhost:44389/api/Project/getAll')
      .then((response) => {
        for (let i of response.data) {
          if (`/projetos/${i.hash}` === window.location.pathname) {
            nome = i.name;
          }
        }

        setContent(
          <Row className="w-100">
            <Col className="col-1" />
            <Col className="projectSettings col-8">
              <h3>
                <Badge style={{ width: 168 }} bg="secondary">
                  {nome}
                </Badge>
              </h3>
              {isAdmin ? (
                <Stack gap={1} direction="horizontal">
                  <Button
                    style={{ width: 168 }}
                    type="button"
                    variant="secondary"
                    onClick={userAddMode}
                  >
                    Gerenciar Usuários
                  </Button>
                </Stack>
              ) : (
                <div />
              )}
            </Col>
          </Row>,
        );
      })
      .catch((e) => console.log(e));
  }, [setContent, isAdmin, userAddMode]);

  const taskAddChange = (card) => {
    setCreation((inCreation) => ({
      ...inCreation,
      [card]: !inCreation[card],
    }));
  };

  const submitAdd = (card, taskDesc) => {
    tasks[card].push({
      id: tasks[card].length,
      descricao: `${taskDesc}`,
      addedBy: JSON.parse(sessionStorage.getItem('login'))?.name,
    });
    setCreation((inCreation) => ({
      ...inCreation,
      [card]: false,
    }));
  };

  const moveTask = (card, task, oldCard) => {
    if (oldCard !== card) {
      let newCard = [];
      Object.values(tasks[oldCard]).forEach((taskI) => {
        if (task.id !== taskI.id) {
          newCard.push(taskI);
        }
      });
      tasks[oldCard] = newCard;
      tasks[card].push(task);
      setCreation((inCreation) => ({
        ...inCreation,
        [card]: inCreation[card],
      }));
    }
  };

  const removeTasks = (card) => {
    setDelete((inDelete) => ({
      ...inDelete,
      [card]: !inDelete[card],
    }));
  };

  const deleteTask = (card, taskId) => {
    for (let i of tasks[card]) {
      if (i.id === taskId) {
        tasks[card].splice(i, 1);
        break;
      }
    }
    setDelete((inDelete) => ({
      ...inDelete,
      [card]: inDelete[card],
    }));
  };

  return (
    <div ref={ref}>
      <Overlay
        show={inUserManagement}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-basic" style={{ width: '100%' }}>
          <Popover.Header
            as="h3"
            style={{ backgroundColor: `rgb(24, 24, 24)` }}
          >
            Gerenciar Usuário
          </Popover.Header>
          <Popover.Body style={{ backgroundColor: `rgb(16, 16, 16)` }}>
            <div style={{ color: 'white' }}>Disponíveis:</div>
            <div
              style={{
                border: 'solid',
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                backgroundColor: `rgb(20, 20, 20)`,
                height: '200px',
                marginBottom: 10,
              }}
            >
              <div style={{ padding: 10 }}>
                {Object.values(JSON.parse(localStorage.getItem('login')))
                  .filter((item) => !userList.includes(item.name, 0))
                  .map(({ name }, index) => {
                    return (
                      <div key={index}>
                        <Container fluid>
                          <Row>
                            <Col className="col-6">{name}</Col>
                            <Col>
                              <Button
                                variant="success"
                                size="sm"
                                style={{
                                  color: 'white',
                                  border: 1,
                                  borderColor: 'white',
                                }}
                                onClick={() => {
                                  userList.push(name);
                                  setCreation((inCreation) => ({
                                    ...inCreation,
                                    ['backlog']: inCreation['backlog'],
                                  }));
                                }}
                              >
                                Adicionar
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div style={{ color: 'white' }}>No Projeto:</div>
            <div
              style={{
                border: 'solid',
                borderWidth: 1,
                borderColor: 'white',
                color: 'white',
                backgroundColor: `rgb(20, 20, 20)`,
                height: '200px',
              }}
            >
              <div style={{ padding: 10 }}>
                {userList.map((name, index) => {
                  return (
                    <div key={index}>
                      <Container fluid>
                        <Row>
                          <Col className="col-6">{name}</Col>
                          <Col>
                            {name !=
                            JSON.parse(sessionStorage.getItem('login'))
                              ?.name ? (
                              <Button
                                variant="danger"
                                size="sm"
                                style={{
                                  color: 'white',
                                  border: 1,
                                  borderColor: 'white',
                                }}
                                onClick={() => {
                                  userList.splice(index, 1);
                                  setCreation((inCreation) => ({
                                    ...inCreation,
                                    ['backlog']: inCreation['backlog'],
                                  }));
                                }}
                              >
                                Remover
                              </Button>
                            ) : (
                              <></>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
              </div>
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
      <div className="grid">
        <Container fluid>
          <DndProvider backend={HTML5Backend}>
            <Row>
              <Col className="col-4">
                <Card
                  cont={tasks.backlog.length}
                  name={'Backlog'}
                  tasks={tasks.backlog}
                  addFunc={taskAddChange}
                  removeFunc={removeTasks}
                  inCreation={inCreation.backlog}
                  inDelete={inDelete.backlog}
                  isAdmin={true}
                  submitAdd={submitAdd}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                />
              </Col>

              <Col className="col-4">
                <Card
                  cont={tasks.developing.length}
                  name={'Developing'}
                  tasks={tasks.developing}
                  addFunc={taskAddChange}
                  removeFunc={removeTasks}
                  inCreation={inCreation.developing}
                  inDelete={inDelete.developing}
                  isAdmin={true}
                  submitAdd={submitAdd}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                />
              </Col>

              <Col className="col-4">
                <Card
                  cont={tasks.finalizado.length}
                  name={'Finalizado'}
                  tasks={tasks.finalizado}
                  addFunc={taskAddChange}
                  removeFunc={removeTasks}
                  inCreation={inCreation.finalizado}
                  inDelete={inDelete.finalizado}
                  isAdmin={true}
                  submitAdd={submitAdd}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                />
              </Col>
            </Row>
          </DndProvider>
        </Container>
      </div>
    </div>
  );
}
export default Projeto;

Projeto.propTypes = {
  setContent: PropTypes.func,
  isAdmin: PropTypes.bool,
};
