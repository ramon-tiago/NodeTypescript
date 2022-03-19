import { EntityRepository, Repository, getCustomRepository} from 'typeorm'
import { Tag } from "../entities/Tag"

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {

}

//const Tags = getCustomRepository(TagsRepositories)
export { TagsRepositories }
