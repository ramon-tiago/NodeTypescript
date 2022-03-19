import { getCustomRepository }from "typeorm"
import { TagsRepositories }from '../repositories/TagsRepositories'


interface ITagsRequest {
    name: string
}

class CreateTagService {

    async execute({ name }: ITagsRequest) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            //throw new Error('Não é possível cadastrar uma tag sem nome')
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name,
        })

        if (tagAlreadyExists) {

            throw new Error('Tag Já cadastrada em nosso sistema')
        }

        const tag = tagsRepositories.create({name})
        await tagsRepositories.save(tag)

        return tag
    }
}

export { CreateTagService }