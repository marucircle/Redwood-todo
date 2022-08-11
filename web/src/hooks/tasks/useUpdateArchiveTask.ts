import toast from 'react-hot-toast'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { UPDATE_ARCHIVE_TASK } from 'src/graphql/task'
import { Task } from 'src/types'

export const useUpdateArchiveTask = () => {
  const [update, { loading, error, data }] = useMutation<Task>(
    UPDATE_ARCHIVE_TASK,
    {
      onCompleted: () => {
        toast.success('タスクのチェック更新に成功しました！')
        navigate(routes.task())
      },
      onError: () => {
        toast.error('タスクのチェック更新に失敗しました...。')
      },
    }
  )

  return {
    update,
    updateArchiveTaskLoading: loading,
    updateArchiveTaskError: error,
    task: data,
  }
}
