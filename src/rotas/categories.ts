import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthentiated";

const cat = Router();
cat.get("/", (req, res) => {
    res.send("ok...")
})


export { cat }