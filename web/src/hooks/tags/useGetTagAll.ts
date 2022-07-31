import toast from 'react-hot-toast'

import { useQuery } from '@redwoodjs/web'

import { GET_TAGS } from 'src/graphql/tag'
import { Tag } from 'src/types'

export const useGetTagAll = () => {
  const {
    data,
    error: getTagsError,
    loading: getTagsLoading,
  } = useQuery<{ tags?: Tag[] }>(GET_TAGS, {
    onError: () => {
      toast.error('タグ取得に失敗しました...。')
    },
  })

  return { tags: data?.tags, getTagsError, getTagsLoading }
}
