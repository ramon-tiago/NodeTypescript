import { Router } from "express"
import CreateUserController from "../controllers/CreateUserControllers";
import ListUserReceiveComplimentsController from "../controllers/ListUserReceiveComplimentsController";
import ListUserSenderComplimentsController from "../controllers/ListUserSenderComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthentiated";

const userRoutes = Router();
userRoutes.post('/', ensureAuthenticated, CreateUserController.handle)
userRoutes.get('/', ensureAuthenticated, CreateUserController.allUsers)
userRoutes.get('/compliments/send', ensureAuthenticated, ListUserSenderComplimentsController.handle)
userRoutes.get('/compliments/receive', ensureAuthenticated, ListUserReceiveComplimentsController.handle)

export { userRoutes }