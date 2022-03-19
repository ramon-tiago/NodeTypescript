import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class ComplimentController {
    async handle(req: Request, res: Response) {
        const createComplimentService = new CreateComplimentService();
        req.body.user_sender = req.user_id
        const compliment = await createComplimentService.execute(req.body)
        return res.json(compliment)
    }
}

export default  new ComplimentController() 