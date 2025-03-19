import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface'

export interface PopularTagsStateInterface {
  isLoading: boolean
  error: string | null
  data: GetPopularTagsResponseInterface | null
}
