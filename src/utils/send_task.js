export const sendTasks = async () => {

    const {tasks} = this.state;
    let {backlog, developing, finalizado} = tasks;
    //Fetch data
    fetch('https://localhost:5001/tasks/backlog', {
        method: 'POST',
        body: {backlog}
    });
    fetch('https://localhost:5001/tasks/developing', {
        method: 'POST',
        body: {developing}
    });
    fetch('https://localhost:5001/tasks/finalizado', {
        method: 'POST',
        body: {finalizado}
    });


}