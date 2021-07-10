const express = require("express");
const app = express();



const index = require("./routes/index")
const contatinhos = require("./routes/toDoRoutes")

app.use(express.json());

app.use("/", index);
app.use("/contatinhos", contatinhos);

module.exports = app