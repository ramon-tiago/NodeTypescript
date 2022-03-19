import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from 'bcryptjs'
import {sign} from 'jsonwebtoken'

const security = 'a7b86e38fb9271b1a0c147ea0b2a1a0c'

interface IAuthenticate {
    email: string;
    password: string;
}

class AuthenticateUserService {
   async execute ({email,password }: IAuthenticate) {
       const userRepositories = getCustomRepository(UserRepositories)
       const userExists = await userRepositories.findOne({email,})
 
       if ( !userExists ) {
           throw new Error ('Email/Password incorrect')
       }
       
       const verify = await compare(password, userExists.password)
 
       if (!verify) {
        throw new Error ('Email/Password incorrect')
       }

       const token = sign({
           email: userExists.email
       }, security ,{
           subject: userExists.id,
           expiresIn: '1d'
       }
       );

       return token
   }
}

export { AuthenticateUserService }