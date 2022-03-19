import { EntityRepository, Repository, getCustomRepository} from 'typeorm'
import { Compliment } from "../entities/Compliments"

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {

}

//const Tags = getCustomRepository(ComplimentsRepositories)
export { ComplimentsRepositories }
