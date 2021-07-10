const { request, response } = require("express")
const contatinhos = require("../models/contatinhos.json")
const idRandomico = Math.floor(Math.random() * 10)



const getAll = (request, response) => {
    response.status(200).send(contatinhos);
};

const getByName = (request, response) => {
    const requisitedName = request.query.nome
    const filteredName = contatinhos.find(contato => contato.nome == requisitedName);
    response.status(200).send(filteredName)

};

const getById = (request, response) => {
    const requisitedId = request.params.id
    const filteredId = contatinhos.find(contato => contato.id == requisitedId);
    response.status(200).send(filteredId);
};

const addContact = (request, response) => {
    const nameContact = request.body.nome;
    const cellphoneContact = request.body.celular;
    const socialMediaContact = request.body.redesSociais;

    const newContact = {
        id: idRandomico,
        data: new Date(),
        nome: nameContact,
        celular: cellphoneContact,
        redesSociais: socialMediaContact
        
    };

    contatinhos.push(newContact)

    response.status(200).send(newContact)
};

const deleteContact = (request, response) => {
    const idRequerido = request.params.id;
    const contatoFiltrado = contatinhos.find(contato => contato.id == idRequerido);
    const indice = contatinhos.indexOf(contatoFiltrado)
    contatinhos.splice(indice, 1)
    response.status(200).send(
        [
            {
                "message": "Conatinho deletado com sucesso!"
            },
            contatinhos
        ]
    )

}











module.exports = {
    getAll,
    getByName,
    getById,
    addContact,
    deleteContact
}