import './style.css';
import { Col, Row} from 'react-bootstrap';
import React, { Component } from 'react';
import { loadProjects } from '../../utils/load_projects';
import TopBar from '../../components/TopBar';
import { ProjectEntry } from '../../components/ProjectEntry';
import { ProjectButton } from '../../components/ProjectButton';

class CoordenadorProjeto extends Component
{
  state = {
    
    inCreation: false,
    inDelete: false,
    reverse: false,

    projetos: {
        1: {id: 1, title:"Projeto", state:"New", tags:[{tagName: "Tag", tagColor: "green"}, {tagName: "Tag2", tagColor: "red"}], creationDate: Date(2022, 5, 12)},
        2: {id: 2, title:"Projeto", state:"New", tags:[{tagName: "Tag", tagColor: "green"}], creationDate: Date(2022, 5, 12)},
        3: {id: 3, title:"Projeto", state:"New", tags:[{tagName: "Tag", tagColor: "green"}], creationDate: Date(2022, 5, 12)}
    }
  };

  componentDidMount() {
    loadProjects();
  }
  
  render() {

    const { inCreation, inDelete, reverse, projetos} = this.state;

    return (
      <div>

        <TopBar isAdmin = {true} inProject = {false}/>

        {/*<Container fluid padding="20%">*/}
        <div className='content'>
            
            <Row className="actions">

                <Col className="col-6">

                    <Row>

                        <ProjectButton imageSrc={"./imgs/order.png"} imageAlt ={"Invert Order"} buttonLabel = {"Recentes"}  />
                        <ProjectButton imageSrc={"./imgs/adicionarLar.png"} imageAlt ={"Add Project"} buttonLabel = {"Novo projeto"}  />
                        <ProjectButton imageSrc={"./imgs/import.png"} imageAlt ={"Import Project"} buttonLabel = {"Importar Projeto"}  />
                        <ProjectButton imageSrc={"./imgs/excluirLar.png"} imageAlt ={"Delete Project"} buttonLabel = {"Lixeira"}  />

                    </Row>

                </Col>

            </Row>
            
            <Row className="label">
                
                <Col className="col-1"><h5>ID</h5></Col>
                <Col className="col-6"><h5>Titulo</h5></Col>
                <Col className="col-1"><h5>Estado</h5></Col>
                <Col className="col-2"><h5>Tags</h5></Col>
                <Col className="col-2"><h5>Data Criação</h5></Col>

            </Row>

            <Row className='projectList'>
                
                <div>
                    {Object.values(projetos).map ( projeto =>{
                        return (
                            
                            <ProjectEntry   id = {projeto.id} 
                                            title = {projeto.title} 
                                            state = {projeto.state} 
                                            tags = {projeto.tags} 
                                            creationDate = {projeto.creationDate}
                            />
                            
                        );
                    })}
                </div>

            </Row>
        
        </div>

      </div>
            
    );
  }

}
export default CoordenadorProjeto;
