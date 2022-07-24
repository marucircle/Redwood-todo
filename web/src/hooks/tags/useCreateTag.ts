import { useMutation } from '@redwoodjs/web'

import { CREATE_TAG } from 'src/graphql/tag'
import { Tag } from 'src/types'

export const useCreateTag = () => {
  const [create, { loading, error, data }] = useMutation<Tag>(CREATE_TAG, {
    onCompleted: () => {
      alert('タグ登録に成功しました！')
    },
  })

  return {
    create,
    createTagLoading: loading,
    createTagError: error,
    tag: data,
  }
}
