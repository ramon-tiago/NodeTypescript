import { Router } from "express";
import { authenticateRoutes } from "./authenticate";
import { cat } from "./categories";
import { complimentsRoutes } from "./compliments";
import { tagsRoutes } from "./tags";
import { userRoutes } from "./users";

const routes = Router();

routes.use("/tags",tagsRoutes);
routes.use("/categories", cat);
routes.use("/compliments", complimentsRoutes);
routes.use("/users", userRoutes);
routes.use("/login", authenticateRoutes);

export { routes }