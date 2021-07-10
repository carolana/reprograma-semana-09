const tasks = require("../models/tarefas.json")

const getAll = (request, response) => {
    response.status(200).send(tasks)
}

const getById = (request, response) => {
    const requisetedId = request.params.id
    const filteredId = tasks.find(tarefa => tarefa.id == requisetedId)
    response.status(200).send(filteredId)
}

const createTask = (request, response) => {
    //pegar a tarefa enviado pelo client
        // descrição
        // autor
    const requeredDescription = request.body.descricao
    const requeredAuthor = request.body.autor

    // juntar o que foi enviado na requisição com os dados automáticos (id, date, finished)
    const novaTarefa = {
        id: "0800",
        data: new Date(),
        concluido: false,
        descricao: requeredDescription,
        autor: requeredAuthor
    };

    // adicionando a nova tarefa inserida pelo client no arquivo json
    tasks.push(novaTarefa)

    // enviar uma resposta
    response.status(200).send(novaTarefa);
}

const deleteTask = (request, response) => {
    // ver qual tarefa a requisição solicitou apagar
        // pegar o id que será apagado pelo parametro
    const idRequerido = request.params.id;

    // filtrar o json para achar a tarefa que foi requisitada a ser apagada
    const idFiltrado = tasks.find(filtro => filtro.id == idRequerido);
    const indice = tasks.indexOf(idFiltrado)
    tasks.splice(indice, 1); 

    response.status(200).send(
        [
            {
                "message": "Tarefa deletada com sucesso!"
            },
            tasks
        ]
    )
}







module.exports = {
    getById,
    getAll,
    createTask,
    deleteTask
}