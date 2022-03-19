import { Router } from "express";
import AuthenticateUserController from "../controllers/AuthenticateUserController";


const authenticateRoutes = Router();

authenticateRoutes.post("", AuthenticateUserController.handle);

export { authenticateRoutes }