import { TagType } from 'src/app/shared/types/tag.type'

export interface ArticleInputInterface {
  title: string
  description: string
  body: string
  tagList: TagType[]
}
