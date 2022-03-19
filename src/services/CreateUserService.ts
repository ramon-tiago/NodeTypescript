import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { hash} from "bcryptjs"

interface IUserRequest {
    name: string;
    password: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute ( {name, password, email, admin = false }:IUserRequest ) {
        const userRepositories = getCustomRepository(UserRepositories);
        if (!email) {
            throw new Error('Email incorrect')
        }
        const userAlreadyExists = await userRepositories.findOne({
            where: {
                email
            }
        });
        if(userAlreadyExists) {
            throw new Error('User Already exists')
        }
        const user = userRepositories.create({
            name,
            password: await hash(password, 8),
            email,
            admin,
        });
        await userRepositories.save(user)
        return user
    }
}

export { CreateUserService }