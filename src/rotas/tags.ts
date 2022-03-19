import { Router } from "express";
import TagController  from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthentiated";

const tagsRoutes = Router();
tagsRoutes.post('', ensureAuthenticated, ensureAdmin, TagController.handle)
tagsRoutes.get('', ensureAuthenticated, TagController.allTags)

export { tagsRoutes }