import './App.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { Component } from 'react';

class App extends Component
{
  state = {
    backlogTasks:  
    [
      {
        id: 1,
        descricao: 'none',
        addedBy: 'none'
      }
    ],
    
    developingTasks: 
    [
      {
        id: 1,
        descricao: 'none',
        addedBy: 'none'
      }
    ],
    
    finalizadoTasks: 
    [
      {
        id: 1,
        descricao: 'none',
        addedBy: 'none'
      }
    ],
  };

  componentDidMount() {
    this.loadTasks(); 
  }

  loadTasks = async () => {

    const backlogResponse = fetch('https://localhost:5001/tasks/backlog');
    const developingResponse = fetch('https://localhost:5001/tasks/developing');
    const finalizadoResponse = fetch('https://localhost:5001/tasks/finalizado');
    const [backlog, developing, finalizado] = await Promise.all([backlogResponse, developingResponse, finalizadoResponse]);
    const backlogTasks = await backlog.json();
    const developingTasks = await developing.json();
    const finalizadoTasks = await finalizado.json();
    this.setState({ backlogTasks: backlogTasks, 
                    developingTasks: developingTasks,
                    finalizadoTasks: finalizadoTasks});

  }

  componentDidUpdate(){}
  componentWillUnmount(){}

  render() {

    const {backlogTasks, developingTasks, finalizadoTasks} = this.state;
  
    return (
      <div className='grid'>
          <Container fluid>
          <Row>
            <Col>

                <div className="card">
          
                  <div >
                      <div className='numberIndicator'>{backlogTasks.length} </div>
                      <div className='cardBar'>
                        Backlog
                        <Button type="button" variant='link'><img src="adicionar.png"></img></Button>
                        <Button type="button" variant='link'><img src="excluir.png"></img></Button>
                        <Button type="button" variant='link'><img src="opcoes.png"></img></Button>
                      </div>
                  </div>

                  {backlogTasks.map( task => (
                    <div className="task" key={task.id}>
                        {task.descricao}
                        <div className="addBy ">
                            {task.addedBy}
                        </div>
                    </div>
                  ))}
              
              </div>

            </Col>
            <Col >
                <div className="card">
                  <div align-self="left ">
                      <div className='numberIndicator'>{developingTasks.length} </div>
                      <div className='cardBar'>
                        Developing
                        <Button type="button" variant='link'><img src="adicionar.png"></img></Button>
                        <Button type="button" variant='link'><img src="excluir.png"></img></Button>
                        <Button type="button" variant='link'><img src="opcoes.png"></img></Button>
                      </div>
                  </div>

                  {developingTasks.map( task => (
                    <div className="task" key={task.id}>
                        {task.descricao}
                        <div className="addBy ">
                            {task.addedBy}
                        </div>
                    </div>
                  ))}
                </div>
                
              
            </Col>
            <Col >
                <div className="card">
                  <div align-self="left ">
                      <div className='numberIndicator'>{finalizadoTasks.length} </div>
                      <div className='cardBar'>
                        Finalizado
                        <Button type="button" variant='link'><img src="adicionar.png"></img></Button>
                        <Button type="button" variant='link'><img src="excluir.png"></img></Button>
                        <Button type="button" variant='link'><img src="opcoes.png"></img></Button>
                      </div>
                      
                  </div>

                  {finalizadoTasks.map( task => (
                    <div className="task" key={task.id}>
                        {task.descricao}
                        <div className="addBy ">
                            {task.addedBy}
                        </div>
                    </div>
                  ))}
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    );
  }

}
export default App;
