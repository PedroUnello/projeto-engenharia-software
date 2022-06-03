import './style.css';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div style={{}}>
        <img src={'/imgs/animation3.gif'} id="animacao"></img>
        <img src={'/imgs/Fire.png'} id="fundo" />
        <div style={{ top: '34%', left: '10%', position: 'fixed' }}>
          <div id="Conteudo">
            <h1 id="Titulo">
              Crie seus projetos de forma fácil e rápida.
              <p id="SubTitulo">
                A melhor ferramenta para criar, gerir e organizar novos
                projetos. Tudo sem custos!
              </p>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
