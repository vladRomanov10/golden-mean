import { TagType } from 'src/app/shared/types/interfaces/tag.type'

export interface PopularTagsStateInterface {
  isLoading: boolean
  error: string | null
  data: TagType[] | null
}
