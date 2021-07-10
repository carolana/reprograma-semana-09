const express = require("express");
const router = express.Router();

router.get("/apresentacao", (request, response) => {
    response.status(200).send(
        {
            "message": "Seja bem-vindo à sua lista de contatinhos!"
        }
    )
})

module.exports = router;