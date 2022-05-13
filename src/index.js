import React from 'react';
import ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import CoordenadorTarefa from './templates/CoordenadorTarefas/coordenador_tarefa';
import CoordenadorProjeto from './templates/CoordenadorProjetos/coordenador_projetos';

const pageContent =  ReactDOMClient.createRoot(document.getElementById('root'));

pageContent.render( 
    < React.StrictMode >
    < CoordenadorProjeto / > 
    </React.StrictMode>,
);
