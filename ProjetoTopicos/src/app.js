const express = require("express");
const app = express();
const rotas = require("./rotas");
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

require("./config/dbConfig");
app.use(express.json());
app.use(rotas);

app.listen(27017);
