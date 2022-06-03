import React from 'react';
import { Col, Row, Button, Stack } from 'react-bootstrap';
import Task from '../../components/Task';
import { useDrop } from 'react-dnd';
import './style.css';
import PropTypes from 'prop-types';

//Tasks stacks, implementing the Drag'n'Drop
function Card({
  cont,
  name,
  tasks,
  addFunc,
  inCreation,
  removeFunc,
  inDelete,
  deleteTask,
  isAdmin,
  submitAdd,
  moveTask,
}) {
  //react-dnd hook useDrop(), for when useDrag() item is dropped in this component
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK', //Accept only TASK itens
    drop: (item) =>
      //Callback function for moving tasks between arrays in project page
      moveTask(
        name.toLowerCase(),
        { id: item.taskId, descricao: item.descricao, addedBy: item.addedBy },
        item.card,
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="card" ref={drop} style={isOver ? {} : {}}>
      <div>
        <Row>
          <Col className="col-1">
            <div className="numberIndicator"> {cont} </div>
          </Col>
          <Col className="col-7">{name}</Col>
          <Col className="col-4">
            <div className="cardBar">
              <Button
                type="button"
                variant="link"
                onClick={() => {
                  addFunc(name.toLowerCase());
                }}
              >
                <img src="/imgs/adicionar.png" alt="Add Button"></img>
              </Button>
              {isAdmin ? (
                <Button
                  type="button"
                  variant="link"
                  onClick={() => {
                    removeFunc(name.toLowerCase());
                  }}
                >
                  <img src="/imgs/excluir.png" alt="Remove Button"></img>
                </Button>
              ) : (
                <div />
              )}
            </div>
          </Col>
        </Row>
      </div>

      {inCreation ? (
        <div>
          <input
            id={`tarefaAdd${name.toLowerCase()}`}
            className="taskInput"
            type="text"
          ></input>
          <Button
            type="button"
            onClick={() => {
              document.getElementById(`tarefaAdd${name.toLowerCase()}`).value
                .length !== 0
                ? submitAdd(
                    name.toLowerCase(),
                    document.getElementById(`tarefaAdd${name.toLowerCase()}`)
                      .value,
                  )
                : addFunc(name.toLowerCase());
            }}
          >
            Add
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      <Stack gap={3}>
        {tasks.map(({ id, descricao, addedBy }) => {
          return (
            <Task
              descricao={descricao}
              addedBy={addedBy}
              taskId={id}
              key={id}
              card={name.toLowerCase()}
              deleteB={
                inDelete ? (
                  <Button
                    className="deleteButton"
                    type="button"
                    onClick={() => {
                      deleteTask(name.toLowerCase(), id);
                    }}
                  >
                    X
                  </Button>
                ) : (
                  <div />
                )
              }
            />
          );
        })}
      </Stack>
    </div>
  );
}
export default Card;

Card.propTypes = {
  cont: PropTypes.number,
  name: PropTypes.string,
  tasks: PropTypes.array,
  addFunc: PropTypes.func,
  inCreation: PropTypes.bool,
  removeFunc: PropTypes.func,
  inDelete: PropTypes.bool,
  deleteTask: PropTypes.func,
  isAdmin: PropTypes.bool,
  submitAdd: PropTypes.func,
  moveTask: PropTypes.func,
};
