import { Router } from "express";
import CreateComplimentController from "../controllers/CreateComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthentiated";



const complimentsRoutes = Router();
complimentsRoutes.post('', ensureAuthenticated, CreateComplimentController.handle)



export { complimentsRoutes }