import React, { useState, useEffect } from 'react';
import './app.css'

import Header from './components/Header'
import api from './services/api'

function App(){

  const [projects, setProjects] = useState([]);

  useEffect(()=> {

    api.get('/projects').then(response => {
      setProjects(response.data);
    })

  },[])


  async function handleAddProjects(){
    // setProjects([...projects, `Novo Project ${Date.now()}`])
    const response = await api.post('projects', {
      title: `Novo Project ${Date.now()}`,
      Owner: "Joao"
    })

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projetcs"/>
        <ul>
          {projects.map(project => <li key={project.id}>{project.title} </li>)}
        </ul>
      <button type="button" onClick={handleAddProjects}>Adicionar Projeto</button>
    </>
  );
}

export default App;