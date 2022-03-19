import { Request, Response} from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const authenticateUserService = new AuthenticateUserService()
        const result =  await authenticateUserService.execute(req.body)
        return res.json({ status: 200, result })
    }
}

export default new AuthenticateUserController()