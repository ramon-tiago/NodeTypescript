import { classToPlain, classToPlainFromExist } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"



class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories)
        let tags = tagsRepositories.find()
        const isso = (await tags).map( (tag) => ({...tag, namecustom: `#${tag.name}`}))
        return classToPlain(tags)
    }
}

export { ListTagsService }