import { TagType } from 'src/app/shared/types/aliases/tag.type'

export interface ArticleInputInterface {
  title: string
  description: string
  body: string
  tagList: TagType[]
}
