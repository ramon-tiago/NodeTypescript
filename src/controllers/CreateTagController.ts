import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagsService";
import { ListTagsService } from "../services/ListTagsService";


class TagController {
    async handle(req: Request, res: Response) {
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(req.body)
        return res.json(tag)
    }
    async allTags(req: Request, res: Response) {
        const listTagsService = new ListTagsService();
        const tag = await listTagsService.execute()
        return res.json(tag)
    }
}

export default  new TagController() 