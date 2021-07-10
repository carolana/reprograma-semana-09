const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send(
        {
            "message": "Bem vindo ao seu aplicativo de tarefas! \o/"
        }
    )
});

module.exports = router;

