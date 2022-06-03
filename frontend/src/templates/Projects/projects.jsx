import './style.css';
import {
  Col,
  Row,
  Overlay,
  Popover,
  Form,
  Button,
  Stack,
  Accordion,
} from 'react-bootstrap';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ProjectEntry } from '../../components/ProjectEntry';
import { ProjectButton } from '../../components/ProjectButton';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import axios from 'axios';

function Projects({ setContent }) {
  //Ref to main container
  const ref = useRef(null);

  //Component States
  const [projects, setProjects] = useState();
  const [inCreation, setCreation] = useState(false);
  const [inDelete, setDelete] = useState(false);
  const [inReverse, setReverse] = useState(false);
  const [target, setTarget] = useState(null);
  const [load, setLoading] = useState(true);

  //Callbacks to invert booleans
  const reverseMode = useCallback(() => {
    setReverse(!inReverse);
  }, [setReverse, inReverse]);
  const creationMode = useCallback(
    (event) => {
      setCreation(!inCreation);
      setTarget(event.target);
    },
    [setCreation, setTarget, inCreation],
  );
  const deleteMode = useCallback(() => {
    setDelete(!inDelete);
  }, [setDelete, inDelete]);

  //useEffect hook for re-rendering page
  useEffect(() => {
    //TopBar content for this page
    setContent(
      <Row className="actions">
        <ProjectButton
          clickFunc={reverseMode}
          imageSrc={inReverse ? '/imgs/reverOrder.png' : '/imgs/order.png'}
          imageAlt={'Invert Order'}
          buttonLabel={'Recentes'}
        />
        <ProjectButton
          id="createButton"
          clickFunc={creationMode}
          imageSrc={'/imgs/adicionarLar.png'}
          imageAlt={'Add Project'}
          buttonLabel={'Novo projeto'}
        />
        <ProjectButton
          clickFunc={deleteMode}
          imageSrc={'/imgs/excluirLar.png'}
          imageAlt={'Delete Project'}
          buttonLabel={'Lixeira'}
        />
      </Row>,
    );
    //First time and when needed, get project list again
    if (load) {
      axios
        .get('https://localhost:44389/api/Project/getAll')
        .then((response) => {
          setProjects(Object.values(response.data));
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
    //page re-render when any of those dependencies update
  }, [setContent, deleteMode, creationMode, reverseMode, load, inReverse]);

  //Callback to delete project, receives ID, find Hash, and sent delete request to server
  const deleteProject = (projectId) => {
    for (let i of Object.keys(projects)) {
      if (projects[i].id === projectId) {
        axios
          .delete(
            `https://localhost:44389/api/Project/delete/${projects[i].hash}`,
          )
          //Case request success, refreshs page and list
          .then(() => {
            setLoading(true);
            setDelete(true);
          })
          //else logs the error
          .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          });
        break;
      }
    }
  };

  //Similar do delete, create projects, event ref the creation form
  const createProject = (event) => {
    event.preventDefault(); //Prevent default refresh
    //Get user inputs, and POST to server
    let { projName, projDesc } = event.target.elements;
    axios
      .post('https://localhost:44389/api/Project/create', {
        id: 13 + 1,
        hash: v4().toString(),
        deleted: false,
        creationDate: new Date().toJSON(),
        name: projName.value,
        description: projDesc.value,
      })
      //If success, refresh page and list
      .then(() => {
        setCreation(false);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  };
  //Page Content
  return (
    <div ref={ref}>
      <div className="content">
        <Overlay
          show={inCreation}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-basic">
            <Popover.Header
              as="h3"
              style={{ backgroundColor: `rgb(24, 24, 24)` }}
            >
              Novo Projeto
            </Popover.Header>
            <Popover.Body style={{ backgroundColor: `rgb(16, 16, 16)` }}>
              <Form onSubmit={createProject}>
                <Form.Group className="mb-3" controlId="projName">
                  <Form.Label style={{ color: 'white' }}>Nome</Form.Label>
                  <Form.Control
                    style={{
                      color: 'white',
                      backgroundColor: `rgb(18, 18, 20)`,
                    }}
                    maxLength={20}
                  />
                  <Form.Text className="text-muted">(20 Caracteres).</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.FloatingLabel
                    controlId="projDesc"
                    style={{ color: 'white' }}
                    label="Descrição"
                    className="mb-3"
                  >
                    <Form.Control
                      style={{
                        color: 'white',
                        backgroundColor: `rgb(20, 20, 20)`,
                        height: '100px',
                      }}
                      maxLength={60}
                      as="textarea"
                      placeholder="Descrição"
                    />
                  </Form.FloatingLabel>
                </Form.Group>
                <Stack direction="horizontal" gap={3}>
                  <Button variant="primary" type="submit" size="lg">
                    Criar
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => setCreation(!inCreation)}
                    size="lg"
                  >
                    Cancelar
                  </Button>
                </Stack>
              </Form>
            </Popover.Body>
          </Popover>
        </Overlay>
        <Row className="label">
          <Col className="col-1">
            <h5>ID</h5>
          </Col>
          <Col className="col-6">
            <h5>Titulo</h5>
          </Col>
          <Col className="col-1">
            <h5>Estado</h5>
          </Col>
          <Col className="col-3">
            <h5>Data Criação</h5>
          </Col>
        </Row>
        <Row className="projectList">
          {load ? (
            <></>
          ) : (
            <Accordion>
              {inReverse
                ? Object.values(projects)
                    .sort(function (a, b) {
                      return (
                        new Date(a.creationDate) - new Date(b.creationDate)
                      );
                    })
                    .reverse()
                    .map((projeto, index) => {
                      return (
                        <ProjectEntry
                          id={projeto.id}
                          title={projeto.name}
                          hash={projeto.hash}
                          state={projeto.deleted ? 'Finalizado' : 'Ativo'}
                          desc={projeto.description}
                          creationDate={new Date(
                            projeto.creationDate,
                          ).toString()}
                          key={index}
                          index={index}
                          inDelete={inDelete}
                          deleteFunc={deleteProject}
                        />
                      );
                    })
                : Object.values(projects)
                    .sort(function (a, b) {
                      return (
                        new Date(a.creationDate) - new Date(b.creationDate)
                      );
                    })
                    .map((projeto, index) => {
                      return (
                        <ProjectEntry
                          id={projeto.id}
                          title={projeto.name}
                          hash={projeto.hash}
                          state={projeto.deleted ? 'Finalizado' : 'Ativo'}
                          desc={projeto.description}
                          creationDate={new Date(
                            projeto.creationDate,
                          ).toString()}
                          key={index}
                          index={index}
                          inDelete={inDelete}
                          deleteFunc={deleteProject}
                        />
                      );
                    })}
            </Accordion>
          )}
        </Row>
      </div>
    </div>
  );
}
export default Projects;

Projects.propTypes = {
  setContent: PropTypes.func,
};
