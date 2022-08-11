import toast from 'react-hot-toast'

import { useQuery } from '@redwoodjs/web'

import { GET_TASKS } from 'src/graphql/task'
import { Task } from 'src/types'

export const useGetTaskAll = () => {
  const {
    data,
    error: getTasksError,
    loading: getTasksLoading,
    refetch: getTasksRefetch,
  } = useQuery<{ tasks?: Task[] }>(GET_TASKS, {
    onError: () => {
      toast.error('タスク一覧の取得に失敗しました...。')
    },
  })

  return { tasks: data?.tasks, getTasksError, getTasksLoading, getTasksRefetch }
}
