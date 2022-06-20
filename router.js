import express from "express";
import UserController from "./controllers/UserController.js";

const Router = express.Router();

Router.get('/admin', UserController.getAll)
Router.get('/admin/:id', UserController.getId)
Router.post('/admin', UserController.Input)
Router.patch('/admin/:id', UserController.Update)
Router.delete('/admin/:id', UserController.Delete)


export default Router;