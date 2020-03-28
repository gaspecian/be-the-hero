//Importes necessários
const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
/**
 * Instância routes
 */
const routes = express.Router();

//rotas de sessão
// rota de login
routes.post("/sessions", SessionController.create)

//rotas de ongs
// rota que cria ongs
routes.post("/ongs", OngController.create)
// rota que consulta ongs
routes.get("/ongs", OngController.index)
// rota que consulta incidents de uma ong
routes.get("/profile", ProfileController.index)

//rotas de incidents
// rota que cria incidents
routes.post("/incidents", IncidentController.create)
// rota que consulta incidents
routes.get("/incidents", IncidentController.index)
// rota que deleta incidents
routes.delete("/incidents/:id", IncidentController.delete)
/**
 * Exporta rotas
 */
module.exports = routes;