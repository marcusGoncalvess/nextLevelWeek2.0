import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// Rota para inserir as aulas e o professor no db
routes.post("/classes", classesControllers.create);

// Filtrar por matéria, dia da semana
routes.get("/classes", classesControllers.index);

// Listando conexão
routes.get('/connections', connectionsController.index)

// Criando uma nova conexão
routes.post("/connections", connectionsController.create);


export default routes;
