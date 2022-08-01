import toast from 'react-hot-toast'

import { useMutation } from '@redwoodjs/web'

import { CREATE_TAG } from 'src/graphql/tag'
import { Tag } from 'src/types'

export const useCreateTag = () => {
  const [create, { loading, error, data }] = useMutation<Tag>(CREATE_TAG, {
    onCompleted: () => {
      toast.success('タグ作成に成功しました！')
    },
    onError: () => {
      toast.error('タグ作成に失敗しました...。')
    },
  })

  return {
    create,
    createTagLoading: loading,
    createTagError: error,
    tag: data,
  }
}
