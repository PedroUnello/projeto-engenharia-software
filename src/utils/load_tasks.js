export const loadTasks = async () => {
  /*
  let backlog = new Promise((resolve, reject) => {fetch('https://localhost:5001/tasks/backlog')})
                    .then(
                      (tarefas => {
                        this.setState({
                          tasks.backlog: 
                        })
                      }
                    )
                    .catch();

  const backlogResponse = fetch('https://localhost:5001/tasks/backlog');
  const developingResponse = fetch('https://localhost:5001/tasks/developing');
  const finalizadoResponse = fetch('https://localhost:5001/tasks/finalizado');
                      */
  
    //Fetch data
    const backlogResponse = fetch('https://localhost:5001/tasks/backlog');
    const developingResponse = fetch('https://localhost:5001/tasks/developing');
    const finalizadoResponse = fetch('https://localhost:5001/tasks/finalizado');
    

    //Make promises for data retrieval
    const [backlog, developing, finalizado] = await Promise.all([backlogResponse, developingResponse, finalizadoResponse]);

    //Try parsing to json/literal object
    const backlogJson = await backlog.json();
    const developingJson = await developing.json();
    const finalizadoJson = await finalizado.json();

    const tasks = {backlog: {backlogJson}, developing: {developingJson}, finalizado: {finalizadoJson}};

    //Set local variables
    this.setState({ 
                    tasks: tasks
                  });

}