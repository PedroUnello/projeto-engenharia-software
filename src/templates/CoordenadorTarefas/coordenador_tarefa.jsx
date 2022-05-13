import './style.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from '../../components/Card';
import { loadTasks } from '../../utils/load_tasks';
import { sendTasks } from '../../utils/send_task';
import TopBar from '../../components/TopBar';

class CoordenadorTarefa extends Component
{
  state = {
    
    inCreation: {backlog: false, developing: false, finalizado: false},
    inDelete: {backlog: false, developing: false, finalizado: false},
    showOption: {backlog: false, developing: false, finalizado: false},

    tasks: {
      backlog: {
        1: { id: 1, descricao: 'Tarefa1', addedBy: 'Claudio' }
      },
      developing: {
        1: { id: 1, descricao: 'Tarefa1', addedBy: 'Claudio' }
      },
      finalizado: {
        1: { id: 1, descricao: 'Tarefa1', addedBy: 'Claudio' }
      },
    }
  };

  componentDidMount() {
    loadTasks();
  }
  
  taskAddChange = card => {
    const {inCreation} = this.state;
    inCreation[card] = !inCreation[card];
    this.setState({inCreation:  inCreation})
  }

  submitAdd = (card, task) => {
    const {tasks, inCreation} = this.state;
    let ind = this.countTasks(tasks[card]) + 1;
    tasks[card][ind] = {id: ind, descricao: `${task}`, addedBy: `Claudio` };
    inCreation[card] = false;
    this.setState({tasks: tasks, inCreation: inCreation})
    sendTasks();
  }

  removeTasks = card => {
    const {inDelete} = this.state;
    inDelete[card] = !inDelete[card];
    this.setState({inDelete: inDelete})
  }
  
  showOptions= card => {

  }

  deleteTask = (card, taskId) => {
    const {tasks} = this.state;
    delete tasks[card][taskId];
    sendTasks();
    this.setState({tasks: tasks})
  }
  

  countTasks(taskList){
    let contagem = 0;
    Object.values(taskList).forEach(task => { contagem++; })
    return contagem;
  }

  render() {

    const { inCreation, inDelete, showOption, tasks} = this.state;

    return (
      <div>

        <TopBar isAdmin = {true} inProject = {true}/>

        <div className='grid'>
          <Container fluid>
            <Row>
              
              <Col className="col-4" >
                <Card cont = {this.countTasks(tasks.backlog)} name = {"Backlog"} tasks = {tasks.backlog} 
                        addFunc = {this.taskAddChange} removeFunc = {this.removeTasks} optionsFunc = {this.showOptions}
                        inCreation = {inCreation.backlog} inDelete = {inDelete.backlog} showOption = {showOption.backlog}
                        isAdmin = {true} submitAdd = {this.submitAdd} deleteTask = {this.deleteTask}
                        />                  
              </Col>

              <Col className="col-4" >
                <Card cont = {this.countTasks(tasks.developing)} name = {"Developing"} tasks = {tasks.developing} 
                        addFunc = {this.taskAddChange} removeFunc = {this.removeTasks} optionsFunc = {this.showOptions}
                        inCreation = {inCreation.developing} inDelete = {inDelete.developing} showOption = {showOption.developing}
                        isAdmin = {true} submitAdd = {this.submitAdd} deleteTask = {this.deleteTask}
                        />                  
              </Col>

              <Col className="col-4" >
                <Card cont = {this.countTasks(tasks.finalizado)} name = {"Finalizado"} tasks = {tasks.finalizado} 
                        addFunc = {this.taskAddChange} removeFunc = {this.removeTasks} optionsFunc = {this.showOptions}
                        inCreation = {inCreation.finalizado} inDelete = {inDelete.finalizado} showOption = {showOption.finalizado}
                        isAdmin = {true} submitAdd = {this.submitAdd} deleteTask = {this.deleteTask}
                        />                  
              </Col>

            </Row>
          </Container>
        </div>
      </div>
      
      
    );
  }

}
export default CoordenadorTarefa;
