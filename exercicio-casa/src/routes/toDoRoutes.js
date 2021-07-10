const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoControllers");


router.get("/todos", controller.getAll);
router.get("/nome", controller.getByName);
router.get("/:id", controller.getById);
router.post("/cadastrar", controller.addContact)
router.delete("/:id", controller.deleteContact)



module.exports = router;