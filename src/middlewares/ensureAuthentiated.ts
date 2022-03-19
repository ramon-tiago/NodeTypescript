import { Request, Response, NextFunction} from "express"
import {verify } from "jsonwebtoken"
const security = 'a7b86e38fb9271b1a0c147ea0b2a1a0c'

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    //receber o token
    const authToken = req.headers.authorization
    //validar se o token está preenchido
    if (!authToken) return res.status(401).end()

    const [, token ] = authToken.split(" ")
    //Validar se token é válido
    try {
        const { sub } = verify(token, security) as IPayload;
        
        console.log(sub)
        req.user_id = sub

        return next();
    }catch(err) {
        return res.status(401).end();
    }
}