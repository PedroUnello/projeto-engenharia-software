import Button from 'react-bootstrap/esm/Button';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import  Task  from '../../components/Task';
import './style.css'
export const Card = ({cont, name, tasks,
                        addFunc, inCreation, 
                        removeFunc, optionsFunc, 
                        inDelete, showOption, 
                        isAdmin, submitAdd, deleteTask
                    }) => (

    <div className="card">

        <div>
            <Row>
                <Col className="col-1">
                    <div className='numberIndicator'> {cont} </div>
                </Col>
                <Col className="col-7">
                    {name}
                </Col>
                <Col className="col-4">
                    <div className='cardBar'>   
                        <Button type="button" variant='link' onClick={() => {addFunc(name.toLowerCase())}}><img src="./imgs/adicionar.png" alt="Add Button"></img></Button>
                        {isAdmin ? <Button type="button" variant='link' onClick={() => {removeFunc(name.toLowerCase())}}><img src="./imgs/excluir.png" alt="Remove Button"></img></Button> : <div/>}
                        {/*<Button type="button" variant='link' onClick={() => {optionsFunc(name.toLowerCase())}}><img src="./imgs/opcoes.png" alt="Options Button"></img></Button>*/}
                    </div>
                </Col>
            </Row> 
        </div>

        { inCreation ? 
            <div>
                <input id={`tarefaAdd${name.toLowerCase()}`} class="taskInput" type="text"></input> 
                <Button type="button" onClick={()=>{document.getElementById(`tarefaAdd${name.toLowerCase()}`).value.length !== 0 ? 
                    submitAdd(name.toLowerCase(), document.getElementById(`tarefaAdd${name.toLowerCase()}`).value) : addFunc(name.toLowerCase())}}>
                        Add</Button> 
            </div>
            : <div></div>
        }

        {Object.values(tasks).map ( task =>{
        return (
            <div key = {task.id}>
                
                <Task descricao = {task.descricao} addedBy = {task.addedBy} 
                   deleteB = {inDelete ? <Button className="deleteButton" type="button" onClick={() => {deleteTask(name.toLowerCase(), task.id)}}>X</Button> 
                   : <div ></div>}/>
            </div>
        );
        })}
    </div>
);
