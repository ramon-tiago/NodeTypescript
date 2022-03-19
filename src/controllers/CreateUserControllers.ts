import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";
import { ListUsersService } from "../services/ListUsersService";

interface Icreate {

}

class CreateUserController {
    async handle(req: Request, res: Response ) {
        const { name, password, email, admin } = req.body;
        const reateUserService = new CreateUserService();
        const user = await reateUserService.execute(req.body)
        return res.json(user)
    }
    async allUsers(req: Request, res: Response ) {
        const listUserService = new ListUsersService();
        const user = await listUserService.execute()
        return res.json(user)
    }
}

export default new  CreateUserController 