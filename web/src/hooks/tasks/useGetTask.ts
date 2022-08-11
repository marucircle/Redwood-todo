import toast from 'react-hot-toast'

import { useQuery } from '@redwoodjs/web'

import { GET_TASK } from 'src/graphql/task'
import { Task } from 'src/types'

export const useGetTask = (id: number) => {
  const {
    data,
    error: getTaskError,
    loading: getTaskLoading,
  } = useQuery<{ task?: Task }>(GET_TASK, {
    variables: { id },
    onError: () => {
      toast.error('タスクの取得に失敗しました...。')
    },
  })

  return { task: data?.task, getTaskError, getTaskLoading }
}
