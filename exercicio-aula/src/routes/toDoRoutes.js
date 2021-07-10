const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoControllers");


router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/cadastrar", controller.createTask);
router.delete("/:id", controller.deleteTask);


module.exports = router;