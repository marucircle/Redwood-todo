import toast from 'react-hot-toast'

import { useQuery } from '@redwoodjs/web'

import { TaskFilterStateType } from 'src/contexts/TaskFilterContext'
import { GET_TASKS } from 'src/graphql/task'
import { Task } from 'src/types'

export const useGetTaskAll = (taskFilterState: TaskFilterStateType) => {
  const {
    data,
    error: getTasksError,
    loading: getTasksLoading,
    refetch: getTasksRefetch,
  } = useQuery<{ tasks?: Task[] }>(GET_TASKS, {
    variables: { mode: taskFilterState.mode, tag: taskFilterState.tagName },
    onError: () => {
      toast.error('タスク一覧の取得に失敗しました...。')
    },
  })

  return {
    tasks: data?.tasks ?? [],
    getTasksError,
    getTasksLoading,
    getTasksRefetch,
  }
}
