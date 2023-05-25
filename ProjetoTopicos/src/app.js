const express = require("express");
const app = express();
const rotas = require("./rotas");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require("./config/dbConfig");
app.use(express.json());
app.use(rotas);

app.listen(27017);
