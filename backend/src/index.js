/**
 * Imports necessários
 */
const express = require("express");
const cors = require('cors');
const routes = require("./routes");

/**
 * Instância app
 */
const app = express();

/**
 * configuração de sergurança cors
 */
app.use(cors());

/**
 * Define linguagem json como linguagem de requisições
 */
app.use(express.json())

/**
 * Rotas
 */
app.use(routes);

/**
 * Cria server na porta 3333
 */
app.listen(3333);