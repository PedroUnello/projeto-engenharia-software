export const loadProjects = async () => {

      let carrega = new Promise((resolve, reject) => {
        fetch('https://localhost:5001/projects');
      })
        .then(projetos => { this.setState({projects: projetos}) })
        .catch(e => console.log(e))
  
  }